// function domainExtractor(url) {
//   let str = url
//     .replace("http://", "")
//     .replace("https://", "")
//     .replace("www.", "");
//   return str.split(".")[0];
// }

function domainExtractor(url) {
  let str = url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "");
  return str.split(".");
}

console.log(domainExtractor("http://www.google.com"));
