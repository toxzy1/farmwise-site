const fs=require("fs"),p="src/ebooks/";
module.exports=()=>JSON.stringify(fs.readdirSync(p).filter(f=>f.endsWith(".md")).map(f=>{const t=fs.readFileSync(p+f,"utf8"),g=k=>(t.match(new RegExp("^"+k+":\\s*(.*)$","m"))||[])[1]||"";
let arr=[];try{arr=JSON.parse(g("for").replace(/'/g,'"'))}catch(e){}return{title:g("title").replace(/^"|"$/g,""),url:"/ebooks/"+f.replace(".md","")+"/",for:arr}}));
