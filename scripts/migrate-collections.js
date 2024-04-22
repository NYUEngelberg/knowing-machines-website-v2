const fs = require("fs");
const https = require("https");

const apiUrl = "https://machinist.smokingheaps.net/api";
const collectionsDir = "public/n-ways-to-see-a-dataset/collections";
const datasetsDir = "public/n-ways-to-see-a-dataset/datasets";
const collections = [2, 3, 5, 6, 7, 9, 10];
const imagePaths = [
  [5, 15348943],
  [8, 78676939],
  [8, 78191526],
  [8, 79239582],
  [8, 78327143],
  [8, 42850351],
  [8, 78288479],
  [8, 77926428],
  [8, 79029811],
  [8, 78408202],
  [9, 82073217],
  [9, 82060419]
];

(async () => {
  await mkdirp(collectionsDir);

  // Fetch grid and carosel images.
  for (let i = 0; i < collections.length; i += 1) {
    const id = collections[i];
    const url = `${apiUrl}/collections/${id}/data?page=0&size=50`;

    const data = await getJson(url);

    await writeJsonToFile(`${collectionsDir}/${id}.json`, data);
    await mkdirp(`${collectionsDir}/${id}`);

    for (let j = 0; j < data.data.length; j += 1) {
      const row = data.data[j];
      const file = row.files[0];
      const targetDir = `${collectionsDir}/${id}/files`;

      await mkdirp(targetDir);
      await downloadFile(`${apiUrl}/collections/${id}/files/${file.id}`, `${targetDir}/${file.name}`);
    }
  }

  // Fetch individual imagePaths
  for(let i = 0; i < imagePaths.length; i += 1) {
    const [id, dataId] = imagePaths[i];
    const url = `${apiUrl}/datasets/${id}/data/${dataId}`;

    const data = await getJson(url);

    await mkdirp(`${datasetsDir}/${id}`)
    await writeJsonToFile(`${datasetsDir}/${id}/${dataId}.json`, data);

    const file = data.data.files[0];
    const targetDir = `${datasetsDir}/${id}/files`;

    await mkdirp(targetDir);
    await downloadFile(`${apiUrl}/collections/${id}/files/${file.id}`, `${targetDir}/${file.name}`);
  }
})();


async function mkdirp(dirPath) {
    try {
      await fs.promises.mkdir(dirPath, { recursive: true });
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
    }
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);

    https.get(url, (response) => {
      response.pipe(file);

      file.on('finish', () => {
        file.close(resolve);  // close() is async, call resolve after close completes.
      });
    }).on('error', (err) => {
      fs.unlink(dest); // Delete the file if request fails.

      reject(err.message);
    });
  });
}

function writeJsonToFile(filePath, data) {
  return new Promise((resolve, reject) => {
    const jsonData = JSON.stringify(data);

    fs.writeFile(filePath, jsonData, 'utf8', error => {
      if (error) {
        reject(error);
      } else {
        resolve(`JSON data is written to the file successfully.`);
      }
    });
  });
}

function getJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let data = '';

      res.on('data', chunk => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject(error);
        }
      });

    }).on('error', reject);
  });
}
