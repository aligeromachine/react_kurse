import * as utils  from "../components/Utils"

export async function fetchData(url, limit, page) {
  const params = {
    _limit: limit,
    _page: page,
  };
  const urlWithParams = `${url}?${utils.objectToQueryString(params)}`;
  try {
    const response = await fetch(urlWithParams);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Convert the response to JSON, This will be the resolved value of the Promise
    const report = await response.json(); 
    const size = response.headers.get('x-total-count');
    return [report, size];
  } catch (e) {
    throw e.message;
  }
}

export async function fetchById(url, id) {
  const urlWithParams = `${url}/${id}`;
  try {
    const response = await fetch(urlWithParams);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Convert the response to JSON, This will be the resolved value of the Promise
    const report = await response.json(); 
    return report;
  } catch (e) {
    throw e.message;
  }
}