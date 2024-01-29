import { isoStringToMmDdYyyy } from "./formatting";

export function getGithubUrlForCommitsPerFile (filePath: string):string {
    const repoOwner = "NYUEngelberg";
    const repoName = "knowing-machines-website-v2";
    const githubApiUrl =
        `https://api.github.com/repos/${repoOwner}/${repoName}/commits?path=${filePath}`;
    return githubApiUrl;
}
export async function getLastCommitDate(filePath: string):Promise<string> {
    const url = getGithubUrlForCommitsPerFile(filePath);
    try {
        const response = await fetch(url);
        console.log(response);
        const commits = await response.json();
        const lastCommitDate = commits[0].commit.committer.date as string;
        //console.log(lastCommitDate);
        return isoStringToMmDdYyyy(lastCommitDate);
    } catch {
        return "";
    }
}