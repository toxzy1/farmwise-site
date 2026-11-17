(function(){var T=window.T,C=window.CFG,A=document.getElementById('app'),O=document.getElementById('out'),$=function(i){return document.getElementById(i)};
var P="Newcastle + IB",G="Gumboro (IBD)",M="Marek's, ND/IB",FM="FMD";
var R=[[[0,'hat',M],[12,'vac',P+' (Lasota/B1 + Mass)'],[14,'vac',G],[21,'boo',G],[26,'boo',P]],
[[0,'hat',M],[17,'vac',P],[17,'vac',G],[35,'boo',P],[63,'boo',P],[63,'vac','Fowl pox (wing-web)'],[77,'vac','Avian encephalomyelitis (AE)'],[91,'boo',P],[119,'boo',P+' (live + inactivated oil vaccine)'],[195,'boo','Newcastle (live)'],[270,'boo','Newcastle (live)'],[345,'boo','Newcastle (live)']],
[[3,'iron','2-3 ml'],[7,'creep',''],[14,'iron',''],[28,'dew',''],[49,'wean',''],[140,'dew',''],[180,'camp',FM],[230,'dew',''],[320,'dew','']],
[[120,'vac','PPR'],[180,'camp',FM+', goat pox, anthrax'],[365,'camp','PPR, anthrax, CDT']],
[[0,'camp',FM+', CBPP, blackleg, anthrax, lumpy skin disease'],[180,'camp',FM],[365,'camp',FM+', CBPP, blackleg, anthrax'],[545,'camp',FM],[730,'camp',FM+', CBPP, blackleg, anthrax']]],
N=[['nW','nE'],['nW','nE','nP'],['asf'],[],[]],X=[0,1,2,4,5];
A.innerHTML='<label>'+T.an+'<select id="a">'+X.map(function(x,i){return'<option value="'+i+'">'+T.animals[x]+'</option>'}).join('')+'</select></label><label>'+T.start+'<input id="s" type="date"></label>';
$('s').value=new Date().toISOString().slice(0,10);
function dt(s,o){var d=new Date(s+'T00:00:00Z');d.setUTCDate(d.getUTCDate()+o);return d}
function fm(d){return new Intl.DateTimeFormat(C.lang,{dateStyle:'medium',timeZone:'UTC'}).format(d)}
function ev(r){return(T[r[1]]+(r[2]?': '+r[2]:''))}
function calc(){var a=+$('a').value,s=$('s').value;if(!s){O.innerHTML='';return}
var h='<table>',rows=R[a];rows.forEach(function(r){h+='<tr><td>'+fm(dt(s,r[0]))+'</td><td>'+ev(r)+'</td></tr>'});h+='</table>';
N[a].forEach(function(k){h+='<p class="muted">'+T[k]+'</p>'});h+='<div class="cta"><p>'+T.vet+'</p><button class="btn" type="button" id="ic">'+T.ics+'</button></div>';O.innerHTML=h}
document.addEventListener('click',function(e){if(e.target.id!='ic')return;var a=+$('a').value,s=$('s').value,n=T.animals[X[a]],l=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//FarmWise//EN'];
R[a].forEach(function(r,i){var d=dt(s,r[0]).toISOString().slice(0,10).replace(/-/g,'');l.push('BEGIN:VEVENT','UID:fw'+a+'-'+i+'-'+s+'@farmwise','DTSTAMP:'+d+'T000000Z','DTSTART;VALUE=DATE:'+d,'SUMMARY:'+(n+' - '+ev(r)).replace(/[,;]/g,' '),'END:VEVENT')});l.push('END:VCALENDAR');
var b=new Blob([l.join('\r\n')],{type:'text/calendar'}),k=document.createElement('a');k.href=URL.createObjectURL(b);k.download='farm-calendar.ics';k.click()});
A.addEventListener('input',calc);calc()})();
