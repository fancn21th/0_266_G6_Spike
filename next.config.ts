import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    // 添加一个规则来处理 .json 文件
    config.module.rules.push({
      test: /\.txt$/,
      use: "raw-loader", // 使用 raw-loader 来处理 .json 文件
    });

    return config;
  },
};

export default nextConfig;
