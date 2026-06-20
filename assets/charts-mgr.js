// Автогенерировано _make_mgr_charts.js. Данные (реальные числа, вымышленные имена) + рендеринг.
var D = {"weeksISO":["W13","W14","W15","W16","W17","W18","W19","W20","W21","W22","W23","W24"],"weeksDate":["23.03","30.03","06.04","13.04","20.04","27.04","04.05","11.05","18.05","25.05","01.06","08.06"],"zones":["Корпус","Кухня","Техника","Лидоруб"],"zoneWon":{"Корпус":[8,16,13,11,17,13,13,7,7,20,17,9],"Кухня":[9,12,7,15,1,12,8,9,8,14,17,13],"Техника":[0,0,1,0,0,0,0,0,0,0,1,0],"Лидоруб":[0,0,0,0,0,0,0,0,0,0,0,0]},"mgrs":{"zaytsev":{"name":"Зайцев Павел","zone":"Корпус","role":"продавец, корпус","nw":[0,1,2,2,4,3,6,0,3,4,2,1],"fwd":[3,1,8,2,8,7,9,1,6,26,9,2],"won":[0,2,0,0,2,3,0,1,2,3,1,1],"lst":[1,0,1,0,0,5,3,0,2,1,0,1],"open":[31,30,29,30,32,34,29,34,35,36,36,37],"clo":[30,29,30,32,34,29,34,35,36,36,37,36],"comp":[1,1,3,0,14,17,0]},"solovyov":{"name":"Соловьёв Андрей","zone":"Корпус","role":"продавец, корпус","nw":[4,1,5,1,1,0,0,5,1,2,3,1],"fwd":[5,2,4,2,2,2,0,6,3,22,5,2],"won":[2,2,1,2,1,0,3,0,2,6,1,0],"lst":[0,0,0,0,1,0,0,0,0,0,0,2],"open":[26,28,27,31,30,29,29,26,31,30,26,28],"clo":[28,27,31,30,29,29,26,31,30,26,28,27],"comp":[1,0,5,2,9,10,0]},"gromov":{"name":"Громов Сергей","zone":"Корпус","role":"продавец, корпус","nw":[1,2,2,3,5,3,2,2,3,1,4,2],"fwd":[4,2,5,6,9,10,3,3,7,6,7,6],"won":[0,2,0,0,1,0,4,1,2,1,0,2],"lst":[2,0,0,0,4,2,3,2,2,0,1,0],"open":[23,23,23,25,28,28,30,25,24,24,24,27],"clo":[23,23,25,28,28,30,25,24,24,24,27,27],"comp":[0,1,2,0,1,14,9]},"tarasov":{"name":"Тарасов Игорь","zone":"Корпус","role":"продавец, корпус","nw":[4,4,4,1,3,1,1,1,3,6,4,1],"fwd":[8,5,7,2,8,2,2,2,7,18,13,8],"won":[4,1,3,1,2,3,3,0,0,2,3,2],"lst":[1,3,1,1,1,0,5,1,2,5,2,0],"open":[36,35,35,35,34,35,33,26,26,29,28,27],"clo":[35,35,35,34,35,33,26,26,29,28,27,26],"comp":[0,1,1,2,9,13,0]},"karpov":{"name":"Карпов Денис","zone":"Корпус","role":"продавец, корпус","nw":[0,0,3,0,4,0,2,2,1,2,0,2],"fwd":[0,4,4,1,6,0,3,5,1,11,2,6],"won":[0,2,2,0,4,2,0,3,0,1,3,0],"lst":[2,1,0,1,1,1,0,1,0,1,1,1],"open":[25,24,21,22,23,22,19,21,19,20,20,16],"clo":[24,21,22,23,22,19,21,19,20,20,16,17],"comp":[0,1,0,1,4,11,0]},"vlasova":{"name":"Власова Ирина","zone":"Кухня","role":"продавец, кухня","nw":[3,3,4,6,2,4,2,2,5,2,2,2],"fwd":[5,10,10,17,5,11,5,6,13,12,9,4],"won":[3,1,2,1,0,1,0,3,1,1,3,1],"lst":[1,2,0,1,0,0,2,5,1,3,2,0],"open":[22,21,21,23,28,30,33,33,27,30,29,27],"clo":[21,21,23,28,30,33,33,27,30,29,27,28],"comp":[0,1,1,1,6,19,0]},"kudrin":{"name":"Кудрин Степан","zone":"Кухня","role":"продавец, кухня","nw":[0,6,2,7,7,0,2,4,8,2,2,2],"fwd":[0,8,10,9,16,4,6,10,13,10,12,5],"won":[0,0,0,4,0,2,1,2,1,4,3,0],"lst":[2,0,1,5,2,0,1,1,1,0,4,3],"open":[22,20,26,27,27,32,30,30,31,37,35,30],"clo":[20,26,27,27,32,30,30,31,37,35,30,29],"comp":[0,1,0,0,9,19,0]},"polyakov":{"name":"Поляков Иван","zone":"Кухня","role":"продавец, кухня","nw":[3,4,1,4,2,2,5,3,1,0,6,0],"fwd":[4,8,4,6,6,5,10,11,9,4,11,8],"won":[0,3,0,0,0,2,0,0,1,1,0,1],"lst":[0,2,2,4,3,0,0,1,2,0,0,2],"open":[12,15,14,13,15,14,15,20,22,20,19,27],"clo":[15,14,13,15,14,15,20,22,20,19,27,24],"comp":[1,0,0,0,3,10,10]},"nazarov":{"name":"Назаров Тимур","zone":"Кухня","role":"продавец, кухня","nw":[2,3,4,2,4,1,3,3,2,1,8,2],"fwd":[4,7,7,5,5,7,6,4,6,7,13,7],"won":[0,1,2,1,0,1,0,1,2,0,1,3],"lst":[0,3,3,0,0,1,2,2,2,10,0,3],"open":[30,32,31,31,32,36,35,36,36,45,36,43],"clo":[32,31,31,32,36,35,36,36,45,36,43,39],"comp":[1,1,2,1,5,19,10]},"nosov":{"name":"Носов Евгений","zone":"Кухня","role":"продавец, кухня","nw":[2,1,4,0,2,3,3,3,1,1,5,0],"fwd":[7,5,4,4,6,7,7,9,6,5,9,5],"won":[0,2,0,3,0,1,1,2,2,3,0,2],"lst":[3,0,0,1,3,2,1,3,1,0,0,1],"open":[19,19,18,22,18,18,18,19,18,17,15,20],"clo":[19,18,22,18,18,18,19,18,17,15,20,17],"comp":[1,0,1,1,1,13,0]},"shilov":{"name":"Шилов Дмитрий","zone":"Техника","role":"техника","nw":[0,1,0,1,0,2,2,2,2,2,1,2],"fwd":[0,0,0,0,0,0,0,0,0,0,0,0],"won":[0,0,0,0,0,0,0,0,0,0,0,0],"lst":[0,0,0,0,0,0,0,0,0,0,0,0],"open":[9,9,10,10,11,11,13,15,17,19,21,22],"clo":[9,10,10,11,11,13,15,17,19,21,22,24],"comp":[24,0,0,0,0,0,0]},"danko":{"name":"Данько Каролина","zone":"Лидоруб","role":"лидоруб","nw":[2,1,0,3,2,3,3,4,1,2,2,3],"fwd":[2,1,0,4,3,3,3,7,3,2,3,1],"won":[0,0,0,0,0,0,0,0,0,0,0,0],"lst":[0,3,12,0,1,0,2,3,1,3,0,3],"open":[66,68,66,54,57,59,62,64,66,68,67,69],"clo":[68,66,54,57,59,62,64,66,68,67,69,70],"comp":[2,30,5,0,1,32,0]}}};
var ZC={'Корпус':'#185FA5','Кухня':'#1D9E75','Техника':'#8a6d3b','Лидоруб':'#5d6d7e'};
var SN=['Заказ в работе','Записан на замер','Предв. встреча','Повторная встреча','Ожидаем решение','Отложено','Заключён договор'];
var SC=['#B4B2A9','#85B7EB','#1D9E75','#97C459','#EF9F27','#D85A30','#534AB7'];
function sum(a){var s=0;for(var i=0;i<a.length;i++)s+=a[i];return s;}
function el(id){return document.getElementById(id);}
function arrAll(){return Object.keys(D.mgrs).map(function(k){return D.mgrs[k];});}

function zoneChart(){ if(!el("cZones"))return; var ds=D.zones.map(function(z){return {label:z,data:D.zoneWon[z],backgroundColor:ZC[z],stack:"s"};});
  new Chart(el("cZones"),{type:"bar",data:{labels:D.weeksDate,datasets:ds},options:{responsive:true,maintainAspectRatio:false,interaction:{mode:"index",intersect:false},
    plugins:{legend:{display:false}},scales:{x:{stacked:true,grid:{display:false},ticks:{font:{size:10}}},y:{stacked:true,beginAtZero:true,title:{display:true,text:"В производство, шт"},ticks:{font:{size:10}}}}}}); }

var METRICS=[{k:"fwd",l:"Продвинул вперёд",rgb:"29,158,117"},{k:"won",l:"В производство",rgb:"29,158,117"},{k:"nw",l:"Новые",rgb:"24,95,165"},{k:"lst",l:"Отсев",rgb:"200,57,43"},{k:"clo",l:"Активный остаток",rgb:"139,109,59"}];
var curM="fwd";
function wkHead(lastLbl){var h="<th class=\"mn\">Менеджер</th>";for(var w=0;w<D.weeksDate.length;w++)h+="<th>"+D.weeksISO[w].replace("W","")+"<div class=\"wd\">"+D.weeksDate[w]+"</div></th>";return h+"<th>"+lastLbl+"</th>";}
function mcell(v,max,rgb){if(v<=0)return "<td class=\"zero\">&middot;</td>";var a=Math.min(0.9,0.15+0.75*v/max);return "<td style=\"background:rgba("+rgb+","+a.toFixed(2)+");color:"+(a>0.5?"#fff":"#1f2328")+"\">"+v+"</td>";}
function renderMatrix(){ var M=METRICS.filter(function(x){return x.k===curM;})[0]; var arr=arrAll();
  var max=1; arr.forEach(function(m){m[M.k].forEach(function(v){if(v>max)max=v;});});
  var lastLbl=M.k==="clo"?"кон":"\u03a3";
  var h="<thead><tr>"+wkHead(lastLbl)+"</tr></thead><tbody>";
  D.zones.forEach(function(z){ var ms=arr.filter(function(m){return m.zone===z;}).sort(function(a,b){return sum(b[M.k])-sum(a[M.k]);}); if(!ms.length)return;
    h+="<tr class=\"zrow\" style=\"--zc:"+ZC[z]+"\"><td class=\"mn\" colspan=\""+(D.weeksDate.length+2)+"\">"+z+"</td></tr>";
    ms.forEach(function(m){ h+="<tr><td class=\"mn\"><span class=\"dot\" style=\"background:"+ZC[z]+"\"></span>"+m.name+"</td>";
      for(var w=0;w<D.weeksDate.length;w++)h+=mcell(m[M.k][w],max,M.rgb);
      var tot=M.k==="clo"?m.clo[m.clo.length-1]:sum(m[M.k]); h+="<td class=\"sm\">"+tot+"</td></tr>"; }); });
  el("matrix").innerHTML=h+"</tbody>"; }
function matrix(){ if(!el("mToggle"))return;
  el("mToggle").innerHTML=METRICS.map(function(M){return "<button data-k=\""+M.k+"\""+(M.k===curM?" class=\"on\"":"")+">"+M.l+"</button>";}).join("");
  el("mToggle").addEventListener("click",function(e){if(e.target.tagName!=="BUTTON")return;curM=e.target.getAttribute("data-k");Array.prototype.forEach.call(el("mToggle").children,function(b){b.className=b.getAttribute("data-k")===curM?"on":"";});renderMatrix();});
  renderMatrix(); }

function stuck(){ if(!el("rStuck"))return; var m=D.mgrs.shilov;
  var h="<table class=\"rf\"><thead><tr><th>нед</th><th>нач</th><th>+нов</th><th>\u2191вперёд</th><th>\u2192произв</th><th>\u2715отсев</th><th>=кон</th></tr></thead><tbody>";
  for(var w=0;w<D.weeksISO.length;w++){h+="<tr><td>"+D.weeksISO[w].replace("W","")+"</td><td>"+m.open[w]+"</td><td class=\"pos\">"+m.nw[w]+"</td><td class=\"fw\">"+m.fwd[w]+"</td><td class=\"pos\">"+m.won[w]+"</td><td class=\"neg\">"+m.lst[w]+"</td><td><b>"+m.clo[w]+"</b></td></tr>";}
  el("rStuck").innerHTML=h+"</tbody></table>"; }

function roles(){ if(!el("tRoles"))return; var arr=arrAll().sort(function(a,b){return sum(b.won)-sum(a.won);});
  var h="<table class=\"rl\"><thead><tr><th>Менеджер</th><th>Роль</th><th>Новые</th><th>Шагов вперёд</th><th>В производство</th><th>Остаток</th></tr></thead><tbody>";
  arr.forEach(function(m){h+="<tr><td class=\"mn\"><span class=\"dot\" style=\"background:"+ZC[m.zone]+"\"></span>"+m.name+"</td><td class=\"role\">"+m.role+"</td><td>"+sum(m.nw)+"</td><td>"+sum(m.fwd)+"</td><td><b>"+sum(m.won)+"</b></td><td>"+m.clo[m.clo.length-1]+"</td></tr>";});
  el("tRoles").innerHTML=h+"</tbody></table>"; }

function backlog(){ if(!el("bBacklog"))return; var arr=arrAll().filter(function(m){return sum(m.comp)>0;}).sort(function(a,b){return sum(b.comp)-sum(a.comp);});
  var max=1; arr.forEach(function(m){var t=sum(m.comp);if(t>max)max=t;});
  var h=""; arr.forEach(function(m){var t=sum(m.comp);
    h+="<div class=\"bk\"><div class=\"bkn\"><span class=\"dot\" style=\"background:"+ZC[m.zone]+"\"></span>"+m.name+"</div><div class=\"bkbar\" style=\"width:"+(t/max*100)+"%\">";
    m.comp.forEach(function(v,i){if(v>0)h+="<span class=\"seg\" style=\"background:"+SC[i]+";flex:"+v+"\" title=\""+SN[i]+": "+v+"\"></span>";});
    h+="</div><div class=\"bkt\">"+t+"</div></div>";});
  el("bBacklog").innerHTML=h;
  el("bLeg").innerHTML=SN.map(function(s,i){return "<span><span class=\"sw\" style=\"background:"+SC[i]+"\"></span>"+s+"</span>";}).join(""); }

document.addEventListener("DOMContentLoaded",function(){zoneChart();matrix();stuck();roles();backlog();});