const data=require("readline");
function otp(){
    const promise=new Promise((resolve,reject)=>{
        const a=data.createInterface({
            input:process.stdin,
            output:process.stdout
        });
        a.question("enter delivery otp:",(code)=>{
            let org="1234";
            if(code===org){
                resolve("otp verfied..\norder recevied..");
            }
            else{
                reject("invalid otp..");
            }
        });
    });
  
    return promise;
}
module.exports=otp;