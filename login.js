const name=require("readline");

function login(){
      const promise=new Promise((resolve,reject)=>{
          const a = name.createInterface({
            input: process.stdin,
            output: process.stdout,
          });
          a.question("enter username: ", (name) => {
            
              let username = "shivaji";
              if (username === name) {
                resolve("login successfull");
              } else {
                reject("invalid username");
              }
              a.close();
            });
          });  
          return promise; 
}
module.exports=login;

