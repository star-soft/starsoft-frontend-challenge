import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  // Caminho para o diretório do Next.js
  dir: "./",
});

// Configuração personalizada do Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  // Arquivo de configuração antes de cada teste
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Descomente e ajuste o caminho
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Ajuste o caminho para o alias @
  },
};

export default createJestConfig(config);
