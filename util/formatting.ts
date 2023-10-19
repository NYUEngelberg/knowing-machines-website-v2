export function addWbrForLongUrls(url: string) {
  if (url.length <= 28) {
    return url;
  }
  var doubleSlash = url.split("//");
  // Format the strings on either side of double slashes separately
  var formatted = doubleSlash
    .map((str) =>
      str
        // Before a single slash, tilde, period, comma, hyphen, underline, question mark, number sign, or percent symbol
        .replace(/(?<before>[/~.,\-_?#%])/giu, "<wbr>$1")
        // Before and after an equals sign or ampersand
        .replace(/(?<beforeAndAfter>[=&])/giu, "<wbr>$1<wbr>")
    )
    .join("//");
  return formatted;
}

const urlRegex = /\>[^\<\>]+\<\/a\>/g;
function urlReplacer(match: string) {
  const url = match.slice(1, -4);
  return ">" + addWbrForLongUrls(url) + "</a>";
}

export function additionalFormatting(htmlContent: string): string {
  let updatedHtmlContent = htmlContent.replace(urlRegex, urlReplacer);
  return updatedHtmlContent;
}

export function formatToMmDdYyyy(d: Date):string {
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');
  const year = d.getFullYear().toString();

  return `${month}/${day}/${year}`;
}
