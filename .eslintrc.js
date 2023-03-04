module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
	'airbnb',
	'airbnb-typescript'
],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
  },
  parserOptions: {
	
        project: ["./tsconfig.json"]
    },
}
