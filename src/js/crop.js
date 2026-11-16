(function(){var T=window.T,C=window.CFG,A=document.getElementById('app'),O=document.getElementById('out'),$=function(i){return document.getElementById(i)};
var R=[[75,25,22,200,300],[20,20,70,200,300],[100,100,0,150,300],[75,20,10,100,200],[75,25,6,100,150],[50,5,70,100,150],[50,20,35,100,150],[50,15,70,100,150],[100,30,0,150,250],[60,50,.3,300,500],[60,50,.4,250,400],[100,50,2.5,250,400],[200,100,3.5,250,400],[300,300,0,200,400]];
function f(n,d){return(+n).toLocaleString(C.lang,{maximumFractionDigits:d==null?0:d})}
function L(k,id,x){return'<label>'+k+'<input id="'+id+'" type="number" min="0" step="any" inputmode="decimal" '+(x||'')+'></label>'}
A.innerHTML='<label>'+T.crop+'<select id="c">'+T.crops.map(function(x,i){return'<option value="'+i+'">'+x+'</option>'}).join('')+'</select></label>'+L(T.area,'z','value="1"')+'<label>&nbsp;<select id="u"><option value="10000">ha</option><option value="4046.86">acre</option><option value="plot">plot</option><option value="1">m²</option></select></label>'+'<span id="pw" hidden>'+L(T.plotm,'pm','value="464.5"')+'</span>'+L(T.rows,'rw')+L(T.pls,'ps')+L(C.sym+' / kg - '+T.sp,'sp')+L(C.sym+' / 50 kg - '+T.fp,'fp');
function set(){var r=R[+$('c').value];$('rw').value=r[0];$('ps').value=r[1];calc()}
function calc(){var r=R[+$('c').value],u=$('u').value;$('pw').hidden=u!='plot';var m=(+$('z').value)*(u=='plot'?+$('pm').value:+u),ha=m/10000,rw=+$('rw').value,ps=+$('ps').value;if(!m||!rw||!ps){O.innerHTML='';return}
var pl=Math.ceil(m/(rw/100*ps/100)*1.1),sd=ha*r[2],lo=ha*r[3],hi=ha*r[4],bl=Math.ceil(lo/50),bh=Math.ceil(hi/50),sp=+$('sp').value,fp=+$('fp').value,h='<div class="res"><div>'+T.plants+'<b>'+f(pl)+'</b></div>';
if(r[2])h+='<div>'+T.seed+'<b>'+f(sd,2)+'</b></div>';
h+='<div>'+T.fert+'<b>'+f(lo)+' - '+f(hi)+'</b></div><div>'+T.bags+'<b>'+f(bl)+' - '+f(bh)+'</b></div>';
if((sp&&r[2])||fp){var a=(r[2]&&sp?sd*sp:0),b=fp?fp:0;h+='<div>'+T.tot+'<b>'+C.sym+' '+f(a+bl*b)+' - '+f(a+bh*b)+'</b></div>'}
O.innerHTML=h+'</div><p class="muted">'+T.soil+'</p>';
$('cta').innerHTML=+$('c').value==2?'<div class="cta"><a class="btn" href="/ebooks/weed-free-farming/">'+T.c2+'</a></div>':''}
A.addEventListener('input',function(e){e.target.id=='c'?set():calc()});set()})();
