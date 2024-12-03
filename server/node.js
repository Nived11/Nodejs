const http=require("http")
const fs=require("fs")
const url=require("url")
http.createServer((req,res)=>{
    const parsed=url.parse(req.url)
    fs.readFile("./pages"+parsed.pathname,(error,data)=>{
        if(error){
            res.writeHead(404,{"Content-Type":"text/html"});
            res.end("something went wrong...")
            console.log(error);
            
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
            console.log("All ok Boss");
            
        }
    })
}).listen(3000,()=>{
    console.log("server created...");
    
})