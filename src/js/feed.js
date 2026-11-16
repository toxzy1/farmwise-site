(function(){var T=window.T,C=window.CFG,A=document.getElementById('app'),O=document.getElementById('out'),U=['wk','wk','kg','g','kg','kg'],D=[4,25,40,100,25,300];
function f(n,d){return(+n).toLocaleString(C.lang,{maximumFractionDigits:d||0})}
function g(a,v){if(a==0)return[25,50,80,115,143,157,165,170][Math.min(Math.max(Math.round(v),1),8)-1];if(a==1)return v<=8?35:v<=18?75:115;if(a==2)return v<10?400:v<25?1000:v<60?1900:v<100?2800:3000;if(a==3)return v*(v<5?.10:v<50?.06:v<200?.04:v<500?.03:.02);return v*(a==4?35:25)}
function L(k,id,x){return'<label>'+k+'<input id="'+id+'" type="number" min="0" step="any" inputmode="decimal" '+(x||'')+'></label>'}
A.innerHTML='<label>'+T.an+'<select id="a">'+T.animals.map(function(x,i){return'<option value="'+i+'">'+x+'</option>'}).join('')+'</select></label>'+L(T.n,'n','value="100"')+'<label><span id="vl"></span><input id="v" type="number" min="0" step="any" inputmode="decimal"></label>'+L(T.days,'d','value="30"')+L(C.sym+' / kg - '+T.price,'p')+L(T.repl,'r','value="0" max="100"')+L(C.sym+' / kg - '+T.fpr,'fp');
var $=function(i){return document.getElementById(i)};
function set(){var a=+$('a').value;$('vl').textContent=T[U[a]];$('v').value=D[a];calc()}
function calc(){var a=+$('a').value,n=+$('n').value,v=+$('v').value,d=+$('d').value,p=+$('p').value,r=+$('r').value,fp=+$('fp').value;if(!n||!v||!d){O.innerHTML='';return}
var gg=g(a,v),td=n*gg/1000,tp=td*d,h='<div class="res"><div>'+T.pd+'<b>'+f(gg,1)+'</b></div><div>'+T.td+'<b>'+f(td,1)+'</b></div><div>'+T.tp+'<b>'+f(tp)+'</b></div>';
if(p)h+='<div>'+T.cost+'<b>'+C.sym+' '+f(tp*p)+'</b></div>';
if(p&&r>0&&fp>0)h+='<div>'+T.sav+'<b>'+C.sym+' '+f(tp*r/100*(p-fp))+'</b></div>';
O.innerHTML=h+'</div>'+(a>3?'<p class="muted">'+T.dm+'</p>':'');
$('cta').innerHTML='<div class="cta"><a class="btn" href="/ebooks/hydroponic-fodder/">'+T.c1+'</a></div>'}
A.addEventListener('input',function(e){e.target.id=='a'?set():calc()});set()})();
