//create and add texts 
// const {appendFile,writeFile}=require("fs")

// appendFile("message.txt", " klm,",(error)=>{
//     if(error){
//         console.log("unable to write...");
        
//     }
// })

//////////////////////////////////////////////////////////////////////////////////


//to remove file
// const fs=require("fs")

// fs.unlink("message.txt",(er)=>{
//     if(er){
//         console.log("unable to remove this file...");
        
//     }
 
// }
// )



/////////////////////////////////////////////////////////////////////////////////////


// create file

const fs=require("fs")

fs.writeFile("textmessage.txt","hello how are you ",(error)=>{
    if(error){
        console.log("unable to create file...");
        
    }
})



////////////////////////////////////////////////////////////////////////////////////////


//to read file
// const fs=require("fs")

// fs.readFile("textmessage.txt","utf-8",(error,data)=>{
//     if(error){
//         console.log("error detected");
        
//     }
//     else{
//         console.log(data);
        
//     }
// })

////////////////////////////////////////////////////////////////////////////////////////////

//url check
// const url=require("url")

// const result=url.parse("http://localhost:5500/Weather/index.html");
// console.log(result);



/////////////////////////////////////////////////////////////////////////////////////////////

//create server 

// const http=require("http")
// const app=http.createServer((req,res)=>{
//     res.end("hello ")
// })

// app.listen(5500)


///////////////////////////////////////////////////////////////////////////////////////////////

