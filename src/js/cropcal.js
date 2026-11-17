(function(){var T=window.T,C=window.CFG,A=document.getElementById('app'),O=document.getElementById('out'),$=function(i){return document.getElementById(i)};
var M=[[[0,'cp'],[7,'bf'],[14,'th'],[14,'ps'],[14,'wd'],[35,'wd'],[35,'td'],[65,'hv'],[100,'mh']],
[[0,'cp'],[14,'bf'],[21,'wd'],[35,'td'],[42,'wd'],[56,'td'],[120,'mh']],
[[0,'cp'],[28,'wd'],[35,'bf'],[56,'wd'],[84,'wd'],[270,'hv'],[330,'mh']],
[[0,'cp'],[14,'bf'],[14,'th'],[21,'wd'],[35,'td'],[42,'wd'],[120,'mh']],
[[0,'cp'],[14,'th'],[21,'wd'],[35,'td'],[42,'wd'],[100,'mh']],
[[0,'cp'],[7,'bf'],[21,'wd'],[42,'wd'],[45,'ps'],[110,'mh']],
[[0,'cp'],[14,'wd'],[30,'ps'],[35,'wd'],[60,'hv'],[75,'mh']],
[[0,'cp'],[21,'wd'],[35,'eu'],[42,'wd'],[110,'mh']],
[[0,'cp'],[21,'wd'],[28,'eu'],[42,'wd'],[120,'hv'],[150,'mh']],
[[0,'ns'],[28,'tr'],[35,'bf'],[49,'sk'],[56,'ps'],[63,'td'],[105,'hv'],[130,'mh']],
[[0,'ns'],[35,'tr'],[42,'bf'],[56,'wd'],[70,'td'],[120,'hv'],[150,'mh']],
[[0,'cp'],[14,'bf'],[21,'wd'],[28,'td'],[45,'hv'],[60,'mh']],
[[0,'cp'],[14,'bf'],[21,'wd'],[35,'td'],[75,'hv'],[90,'mh']],
[[0,'cp'],[45,'wd'],[60,'bf'],[90,'wd'],[180,'td'],[300,'hv'],[360,'mh']]];
A.innerHTML='<label>'+T.crop+'<select id="c">'+T.crops.map(function(x,i){return'<option value="'+i+'">'+x+'</option>'}).join('')+'</select></label><label>'+T.start+'<input id="s" type="date"></label>';
$('s').value=new Date().toISOString().slice(0,10);
function dt(s,o){var d=new Date(s+'T00:00:00Z');d.setUTCDate(d.getUTCDate()+o);return d}
function fm(d){return new Intl.DateTimeFormat(C.lang,{dateStyle:'medium',timeZone:'UTC'}).format(d)}
function calc(){var c=+$('c').value,s=$('s').value;if(!s){O.innerHTML='';return}
var h='<table>';M[c].forEach(function(r){h+='<tr><td>'+fm(dt(s,r[0]))+'</td><td>'+T[r[1]]+'</td></tr>'});
O.innerHTML=h+'</table><p class="muted">'+T.tip+' '+T.soil+'</p><div class="cta"><button class="btn" type="button" id="ic">'+T.ics+'</button></div>'}
document.addEventListener('click',function(e){if(e.target.id!='ic')return;var c=+$('c').value,s=$('s').value,l=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//FarmWise//EN'];
M[c].forEach(function(r,i){var d=dt(s,r[0]).toISOString().slice(0,10).replace(/-/g,'');l.push('BEGIN:VEVENT','UID:fwc'+c+'-'+i+'-'+s+'@farmwise','DTSTAMP:'+d+'T000000Z','DTSTART;VALUE=DATE:'+d,'SUMMARY:'+(T.crops[c]+' - '+T[r[1]]).replace(/[,;]/g,' '),'END:VEVENT')});l.push('END:VCALENDAR');
var b=new Blob([l.join('\r\n')],{type:'text/calendar'}),k=document.createElement('a');k.href=URL.createObjectURL(b);k.download='crop-calendar.ics';k.click()});
A.addEventListener('input',calc);calc()})();
