## sandbox test typecheck

test に typecheck が必要か考えるために利用する repo

## usage

```bash
# typescriptを変換できないのでテスト実行落ちる
npm run test

# ts-jestを使ってjest実行
npm run test:ts-jest
# babel-jestを使ってjest実行
npm run test:babel-jest
# @swc/jestを使ってjest実行
npm run test:swc-jest
# esbuild-jestを使ってjest実行
npm run test:esbuild-jest
```
