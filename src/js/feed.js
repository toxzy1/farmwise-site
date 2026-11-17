(function(){var T=window.T,C=window.CFG,A=document.getElementById('app'),O=document.getElementById('out'),U=['wk','wk','kg','g','kg','kg'],D=[1,19,40,100,25,300],$=function(i){return document.getElementById(i)};
function f(n,d){return(+n).toLocaleString(C.lang,{maximumFractionDigits:d||0})}
function g(a,v){if(a==0)return[25,50,80,115,143,157,165,170][Math.min(Math.max(Math.round(v),1),8)-1];if(a==1)return v<=8?35:v<=18?75:115;if(a==2)return v<10?400:v<25?1000:v<60?1900:v<100?2800:3000;if(a==3)return v*(v<5?.10:v<50?.06:v<200?.04:v<500?.03:.02);return v*(a==4?35:25)}
function L(k,id,x){return'<label>'+k+'<input id="'+id+'" type="number" min="0" step="any" inputmode="decimal" '+(x||'')+'></label>'}
A.innerHTML='<label>'+T.an+'<select id="a">'+T.animals.map(function(x,i){return'<option value="'+i+'">'+x+'</option>'}).join('')+'</select></label>'+L(T.n,'n','value="100"')+'<label><span id="vl"></span><input id="v" type="number" min="0" step="any" inputmode="decimal"></label>'+L(T.days,'d','value="42"')+L(C.sym+' / kg - '+T.price,'p')+L(C.sym+' - '+T.buy,'b')+L(C.sym+' - '+T.oth,'o')+L(C.sym+' - '+T.sell,'s');
function set(){var a=+$('a').value;$('vl').textContent=T[U[a]];$('v').value=D[a];$('d').value=a==0?42:a==1?30:a==3?90:a==2?120:30;calc()}
function calc(){var a=+$('a').value,n=+$('n').value,v=+$('v').value,d=+$('d').value,p=+$('p').value,b=+$('b').value,o=+$('o').value,s=+$('s').value;if(!n||!v||!d){O.innerHTML='';return}
var gg=g(a,v),tp=0,i;if(a<2){for(i=0;i<d;i++)tp+=g(a,v+Math.floor(i/7));tp*=n/1000}else tp=n*gg*d/1000;
var h='<div class="res"><div>'+T.pd+'<b>'+f(gg,1)+'</b></div><div>'+T.td+'<b>'+f(tp/d,1)+'</b></div><div>'+T.tp+'<b>'+f(tp)+'</b></div>';
if(p){var fc=tp*p,tc=fc+n*b+o;h+='<div>'+T.cost+'<b>'+C.sym+' '+f(fc)+'</b></div>';if(b||o)h+='<div>'+T.tc+'<b>'+C.sym+' '+f(tc)+'</b></div>';h+='<div>'+T.be+'<b>'+C.sym+' '+f(tc/n)+'</b></div>';if(s)h+='<div>'+T.rev+'<b>'+C.sym+' '+f(n*s)+'</b></div><div>'+T.pr+'<b class="'+(n*s-tc<0?'neg':'')+'">'+C.sym+' '+f(n*s-tc)+'</b></div>'}
var adv=T.a1;if(p&&s&&n*s<tc)adv=T.a2+' '+T.a1;O.innerHTML=h+'</div>'+'<div class="cta">'+adv+'</div>'+(a>3?'<p class="muted">'+T.dm+'</p>':'');
}
A.addEventListener('input',function(e){e.target.id=='a'?set():calc()});set()})();
