// src/api/axiosInstance.ts

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api", // ベースURLを設定
  // 必要に応じてヘッダーや他の設定を追加
});

export default axiosInstance;
