export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    '.+\\.(css|styl|less|sass|scss)$': "jest-css-modules-transform"
  },
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1",
  } 
}