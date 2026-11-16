const C=require("./countries.json"),L=require("./langs.json");
module.exports=()=>{const o=[];for(const l of L){const dn=new Intl.DisplayNames([l.code],{type:"region"});for(const c of C)o.push({lang:l.code,prefix:l.prefix,slug:c.slug,name:dn.of(c.i),cur:c.c,sym:c.s})}return o};
