const fs=require("fs");
function file(){
    const a = fs.writeFileSync(
      "food.txt",
      "Customer : Shivaji\nFood : Pizza\nStatus : Delivered",
    );
    const data= fs.readFileSync("food.txt","utf8");
    return data;
}
module.exports=file;