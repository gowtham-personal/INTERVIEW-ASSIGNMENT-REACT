import React from "react";
import axios from "axios";

export const getMethod = async (url, header, params) => {
  try {
    const response = await axios({
      method: "get",
      url: url,
      params: params,
      headers: header
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const postMethod = async (url, requestData, header, params) => {
  try {
    const response = await axios({
      method: "post",
      url: url,
      data: requestData,
      params: params,
      headers: header
      // transformRequest: jsonData => transformRequest(jsonData)
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

const transformRequest = (jsonData = {}) =>
  Object.entries(jsonData)
    .map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
    .join("&");
