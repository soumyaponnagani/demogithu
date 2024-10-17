const http=require('http')
const PORT=6500;
const myServer=http.createServer((request,response)=>{
    response.write("Welcome to Nodemon application");
    response.end();
})
myServer.listen(PORT,()=>{
    console.log(`My Server is running in ${PORT}`)
})