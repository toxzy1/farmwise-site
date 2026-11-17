(function(){var T=window.T,C=window.CFG,A=document.getElementById('app'),O=document.getElementById('out'),K='fw_diary',R=[],S='';
try{R=JSON.parse(localStorage.getItem(K)||'[]');S=localStorage.getItem('fw_cur')||''}catch(e){}
function sv(){try{localStorage.setItem(K,JSON.stringify(R));localStorage.setItem('fw_cur',S)}catch(e){}}
function f(n){return(+n).toLocaleString(C.lang,{maximumFractionDigits:2})}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return'&#'+c.charCodeAt(0)+';'})}
var $=function(i){return document.getElementById(i)};
A.innerHTML='<label>'+T.cur+'<input id="cu" maxlength="6"></label><label>'+T.date+'<input id="dt" type="date"></label><label>'+T.type+'<select id="ty"><option value="e">'+T.exp+'</option><option value="i">'+T.inc+'</option></select></label><label>'+T.item+'<input id="it" maxlength="80"></label><label>'+T.amt+'<input id="am" type="number" min="0" step="any" inputmode="decimal"></label><button class="btn" id="ad" type="button">'+T.add+'</button>';
$('cu').value=S;$('dt').value=new Date().toISOString().slice(0,10);
function draw(){var e=0,i=0;R.forEach(function(r){r.t=='e'?e+=r.a:i+=r.a});var h='<div class="res"><div>'+T.te+'<b>'+S+' '+f(e)+'</b></div><div>'+T.ti+'<b>'+S+' '+f(i)+'</b></div><div>'+T.prof+'<b class="'+(i-e<0?'neg':'')+'">'+S+' '+f(i-e)+'</b></div></div>';
if(!R.length)h+='<p>'+T.empty+'</p>';else{h+='<table>';R.slice().reverse().forEach(function(r,k){var ix=R.length-1-k;h+='<tr><td>'+esc(r.d)+'</td><td>'+(r.t=='e'?T.exp:T.inc)+'</td><td>'+esc(r.n)+'</td><td>'+f(r.a)+'</td><td><button type="button" data-x="'+ix+'">'+T.del+'</button></td></tr>'});h+='</table><p><button class="btn" type="button" id="cs">'+T.csv+'</button> <button class="btn" type="button" id="cl">'+T.clr+'</button></p>'}
O.innerHTML=h}
document.addEventListener('click',function(e){var t=e.target;
if(t.id=='ad'){var a=+$('am').value;if(!a)return;S=$('cu').value;R.push({d:$('dt').value,t:$('ty').value,n:$('it').value,a:a});$('am').value='';$('it').value='';sv();draw()}
else if(t.dataset&&t.dataset.x){R.splice(+t.dataset.x,1);sv();draw()}
else if(t.id=='cl'){if(confirm(T.conf)){R=[];sv();draw()}}
else if(t.id=='cs'){var c='\ufeff'+[T.date,T.type,T.item,T.amt].join(',')+'\n'+R.map(function(r){return[r.d,r.t=='e'?T.exp:T.inc,'"'+String(r.n).replace(/"/g,'""')+'"',r.a].join(',')}).join('\n'),b=new Blob([c],{type:'text/csv'}),l=document.createElement('a');l.href=URL.createObjectURL(b);l.download='farm-diary.csv';l.click()}});
$('cu').addEventListener('input',function(){S=$('cu').value;sv();draw()});draw()})();
