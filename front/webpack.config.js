import path from 'node:path';
import { fileURLToPath } from 'node:url';

// 1. ESM 환경에서 __dirname 구현하기
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
};

export default config;
