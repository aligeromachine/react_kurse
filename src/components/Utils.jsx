
export async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function objectToQueryString(obj) {
  return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
}

export function getPageCount(total, limit) {
  return Math.ceil(total / limit);
}

export function getPagesArray(totalPages) {
  var ls = [];
  for (let i = 0; i < totalPages; i++ ) {
    ls.push(i + 1);
  }
  return ls;
}