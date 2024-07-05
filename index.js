
// create server using express
// const express = require("express")
// const app = express()
// const port = 3000;
// app.get('/',(req,res)=>{
//     res.send("hello world");
// });
// app.listen(port,()=>{
//     console.log("the server is on http://localhost:3000")
// });


//create server using http
// const http = require("http")
// const port = 3000;

// http.createServer((req,res)=>{
//     res.write("Hello World");
//     res.end()
// }).listen(port,()=>{
//     console.log("server is on http://localhost:3000")
// })

const { error, log } = require("console");
const fs = require("fs");

// const cntent = "bye riyaa"

// fs.writeFile('new.txt',cntent,(err)=>{
//     if(err){
//         console.log(error.err)
//     }
//     console.log("file is created");
// })

// fs.readFile('new.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(error.err)
//     }
//     fs.appendFile/*writeFile*/('hi',data,(err)=>{
//         if(err){
//             console,log(error.err)
//         }
//         console.log("the file is written");
//     })
// })

// fs.unlink('new.txt',(err)=>{
//     if(err){
//         comsole.log(error.err)
//     }
//     console.log("the file is deleted")
// })

// make a stream

// const writeStream = fs.createWriteStream("hoyy");
// const readStream = fs.createReadStream("hi");

// readStream.pipe(writeStream);

// writeStream.on('finish',()=>{
//     console.log("okay")
// })

//event emmitter

// const eventEmitter = require('events');

// const myEmit = new eventEmitter()

// const eventHandler=()=>{
//     console.log("evenet emitted")
// }

// myEmit.on('oooo',eventHandler);
// myEmit.emit('oooo');

// middleware
// const express = require('express');
// const app = express();
// const port =3000;

// const middle = (req,res,next)=>{
//     console.log("haii");
//     next();
// }

// app.use(middle);

// app.get('/:id?',(req,res)=>{
//     const path = req.params.id;
//     res.send("path params sample");
//     console.log(path);
// })

// app.get('/',(req,res)=>{
//     const query = req.query;
//     res.send("query params sample");
//     console.log(query);
// })

// app.listen(3000,()=>{
//     console.log("server is running in http://localhost:3000")
// })


























// app.get('/:id',(req,res)=>{
//     let pathParam=req.params.id
//      res.send('hello world')
//      console.log(pathParam);
//  })
 
//  app.get('/',(req,res)=>{
//      let queryParam = req.query
//      console.log(queryParam)
//      res.send("hey")
//  })
