This repository demonstrates an issue with [supertest](https://github.com/visionmedia/supertest/) where it fails to quit the express server despite calling .end() 

## Reproduce
```
 npm install
 npm run test
```
...never quits 😢
