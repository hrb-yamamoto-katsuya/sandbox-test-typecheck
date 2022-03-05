## sandbox test typecheck

test に typecheck が必要か考えるために利用する repo

## usage

```bash
# typescriptを変換できないのでテスト実行落ちる
npm run test

# ts-jestを使ってjest実行
npm run test:ts-jest
# ts-jestを使ってjestでwatch実行
npm run test:ts-jest:watch

# babel-jestを使ってjest実行
npm run test:babel-jest
# babel-jestを使ってjestでwatch実行
npm run test:babel-jest:watch

# @swc/jestを使ってjest実行
npm run test:swc-jest
# @swc/jestを使ってjestでwatch実行
npm run test:swc-jest:watch

# esbuild-jestを使ってjest実行
npm run test:esbuild-jest
# esbuild-jestを使ってjestでwatch実行
npm run test:esbuild-jest:wath
```
