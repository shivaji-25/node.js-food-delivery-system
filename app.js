const file=require("./file");
const login=require("./login");
const otp=require("./otp");
async function disp(){
  try{
    const loginresult=await login();
    console.log(loginresult);
    while(true){
        try{
           const otpresult = await otp();
         console.log(otpresult);
         break;
        }
        catch(error){
            console.log(error);
        }
    }
   
    const fileresult=await file();
    console.log( fileresult);


  }
  catch(error){
    console.log(error);

  }
}
disp();