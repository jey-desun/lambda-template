# README
## とりあえず動かしたい時
```shell
lambda-template$ npm install
lambda-template$ npm run tsc
lambda-template$ sam local invoke -e test-json/test01.json 
```
## ts->js監視
```shell
lambda-template$ npm run watch
```
これでtsファイルに変更があった時に検知してjsに変換してくれる
