import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";

const nextConfig: NextConfig = {
  reactCompiler: true,
};

export default withBotId(nextConfig);