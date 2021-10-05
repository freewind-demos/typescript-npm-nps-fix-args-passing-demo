Typescript Npm "nps" Args Passing Demo
=========================

使用nps时会遇到一个问题，由于它没有`pre/post` hook，对于需要一同执行的多个scripts，我们无法方便的把 command line args 传入到目标script。

解决办法是自己写一些函数来获取args，以及相应的series/parallel，来解决这个问题。

另外可以使用typescript来写`package-scripts.ts`

```
npm install
npm start "hello -- --k=v"
npm start "hello.parallel -- --k=v"
```
