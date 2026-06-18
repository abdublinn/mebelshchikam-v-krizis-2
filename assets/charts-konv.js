(function(){
  var L=['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'];
  var leads=[215,180,154,155,115,161,171,196,172,144,171,108];
  var ld=[63.2,60.6,61.6,67.4,45.8,53.1,64.8,66.6,70.2,68.8,72,72.2];
  var dc=[60.6,59.4,57.9,53.8,48,58,55.1,65.3,54.6,64.3,53.5,47.2];
  var junk=[36.9,45.7,45.3,30.7,53.3,45.1,30.9,38.1,26.2,28.6,32,23.7];
  var cnt=[67,83,60,59,54,43,46,68,64,88,56,62];
  var rev=[22.6,22.1,14.4,24.4,18.2,19.3,17.5,19.4,16.8,33.5,21.2,26.2];
  var rmed=[23.5,22.4,18.7,15.7,24.8,19.4,17.7,13.4,16.9,24.4,17.2,23.3];
  var rmean=[70.6,28.8,38.9,35.2,47.5,43.8,42.8,32,38.3,43.3,63.9,70.2];
  var revC=[10.8,6.4,8,9.7,5.9,5.9,9.3,8.2,6.1,12.5,7.7,11.8];
  var revK=[8.8,14.1,11.4,10.1,12.6,8,10.5,11.8,12,19.1,16.7,15.8];
  var revO=[3.4,0.3,0.3,0.3,0.1,0,0.3,0,0,0.3,0.2,0.7];
  var c_leads=[106,64,69,60,47,56,96,88,74,80,53,58],c_ld=[60.6,52.2,71.9,64.8,57.6,55.8,56.4,65.2,56.5,61.3,71.5,57.7],c_dc=[60.4,67.1,58.1,51.9,44.8,62.6,57.8,62.4,57.4,69.9,68.9,65.7],c_junk=[48,39.2,36.6,27.3,42.5,35.3,33.8,41.8,34,25.5,24.4,47.6];
  var k_leads=[90,54,46,79,77,78,75,55,53,55,68,49],k_ld=[60.2,67.6,66.6,62.3,51.9,58.4,74.2,78.1,78,66.8,80.4,75.8],k_dc=[62,43,42.9,69.5,41.9,67.9,57.5,66.2,55.9,54.9,56.9,53.2],k_junk=[31.4,42.4,30.9,36.1,53.5,39,23.1,27,20.8,26,23.5,19.3];

  var cband={id:'cb',beforeDraw:function(ch){var x=ch.scales.x,a=ch.chartArea,c=ch.ctx;var s=x.getPixelForValue(9.5);if(s==null)return;c.save();c.fillStyle='rgba(136,135,128,0.12)';c.fillRect(s,a.top,a.right-s,a.bottom-a.top);c.restore();}};
  var XT={ticks:{font:{size:11}},grid:{display:false}};
  function conv(id,lv,a,b,j,shade){
    var ds=[{type:'bar',data:lv,yAxisID:'y1',backgroundColor:'rgba(133,183,235,0.42)',borderWidth:0,order:10},
      {type:'line',label:'Лид→Сделка',data:a,yAxisID:'y',borderColor:'#639922',backgroundColor:'#639922',borderWidth:2,pointRadius:2,pointStyle:'triangle',tension:0.3,order:3},
      {type:'line',label:'Сделка→Договор',data:b,yAxisID:'y',borderColor:'#534AB7',backgroundColor:'#534AB7',borderWidth:2,pointRadius:2,pointStyle:'rect',tension:0.3,order:2},
      {type:'line',label:'Отсеяно',data:j,yAxisID:'y',borderColor:'#888780',backgroundColor:'#888780',borderWidth:2,borderDash:[2,3],pointRadius:1.5,tension:0.3,order:1}];
    new Chart(document.getElementById(id),{data:{labels:L,datasets:ds},options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index',intersect:false},
      plugins:{legend:{display:false},tooltip:{callbacks:{label:function(c){return c.dataset.type==='bar'?('вход: '+c.parsed.y):(c.dataset.label+': '+c.parsed.y+'%');}}}},
      scales:{x:XT,y:{position:'left',beginAtZero:true,max:90,title:{display:true,text:'Конверсия, %'},ticks:{font:{size:10},callback:function(v){return v+'%';}}},
        y1:{position:'right',beginAtZero:true,max:Math.max.apply(null,lv)*2.0,grid:{drawOnChartArea:false},title:{display:true,text:'Лидов, шт'},ticks:{font:{size:10}}}}},plugins:shade?[cband]:[]});
  }
  conv('pA1',leads,ld,dc,junk,true);
  conv('pA6',c_leads,c_ld,c_dc,c_junk,true);
  conv('pA7',k_leads,k_ld,k_dc,k_junk,true);

  new Chart(document.getElementById('pA2'),{type:'bar',data:{labels:L,datasets:[
    {label:'Сегмент А',data:revC,backgroundColor:'#378ADD',stack:'m'},
    {label:'Сегмент Б',data:revK,backgroundColor:'#1D9E75',stack:'m'}]},
    options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index',intersect:false},
      plugins:{legend:{display:false},tooltip:{callbacks:{label:function(c){return c.dataset.label+': '+c.parsed.y.toFixed(1)+' млн ₽';},footer:function(it){var s=0;it.forEach(function(i){s+=i.parsed.y;});return 'Итого: '+s.toFixed(1)+' млн ₽';}}}},
      scales:{x:Object.assign({stacked:true},XT),y:{stacked:true,beginAtZero:true,title:{display:true,text:'Выручка, млн ₽'},ticks:{font:{size:10},callback:function(v){return v+'М';}}}}}});

  new Chart(document.getElementById('pA3'),{data:{labels:L,datasets:[
    {type:'bar',data:rev,yAxisID:'y1',backgroundColor:'rgba(29,158,117,0.32)',borderWidth:0,order:10},
    {type:'line',label:'Медиана',data:rmed,yAxisID:'y',borderColor:'#185FA5',backgroundColor:'#185FA5',borderWidth:2.4,pointRadius:2,tension:0.3,order:1},
    {type:'line',label:'Среднее',data:rmean,yAxisID:'y',borderColor:'#D85A30',backgroundColor:'#D85A30',borderWidth:2.4,borderDash:[6,4],pointRadius:2,pointStyle:'rectRot',tension:0.3,order:2}]},
    options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index',intersect:false},
      plugins:{legend:{display:false},tooltip:{callbacks:{label:function(c){return c.dataset.type==='bar'?('выручка: '+c.parsed.y.toFixed(1)+' млн ₽'):(c.dataset.label+': '+c.parsed.y+' дн');}}}},
      scales:{x:XT,y:{position:'left',beginAtZero:true,suggestedMax:70,title:{display:true,text:'Срок, дней'},ticks:{font:{size:10}}},
        y1:{position:'right',beginAtZero:true,suggestedMax:35,grid:{drawOnChartArea:false},title:{display:true,text:'Выручка, млн ₽'},ticks:{font:{size:10},callback:function(v){return v+'М';}}}}}});

  conv('pA4a',leads,ld,dc,junk,true);
  new Chart(document.getElementById('pA4b'),{type:'line',data:{labels:L,datasets:[
    {label:'Медиана',data:rmed,borderColor:'#185FA5',backgroundColor:'#185FA5',borderWidth:2.4,pointRadius:2,tension:0.3},
    {label:'Среднее',data:rmean,borderColor:'#D85A30',backgroundColor:'#D85A30',borderWidth:2.4,borderDash:[6,4],pointRadius:2,pointStyle:'rectRot',tension:0.3}]},
    options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index',intersect:false},
      plugins:{legend:{display:false},tooltip:{callbacks:{label:function(c){return c.dataset.label+': '+c.parsed.y+' дн';}}}},
      scales:{x:XT,y:{beginAtZero:true,suggestedMax:70,title:{display:true,text:'Срок лид→договор, дней'},ticks:{font:{size:10}}}}}});

  // heatmap
  var cms=['2025-01','2025-02','2025-03','2025-04','2025-05','2025-06','2025-07','2025-08','2025-09','2025-10','2025-11','2025-12'];
  var lms=['2024-05','2024-06','2024-07','2024-08','2024-09','2024-10','2024-11','2024-12','2025-01','2025-02','2025-03','2025-04','2025-05','2025-06','2025-07','2025-08','2025-09','2025-10','2025-11','2025-12'];
  var M=[[3,2,1,0,1,6,7,14,26,0,0,0,0,0,0,0,0,0,0,0],[1,0,1,0,1,1,3,2,20,20,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,1,2,4,20,16,0,0,0,0,0,0,0,0,0],[1,1,0,1,1,0,1,1,2,3,14,23,0,0,0,0,0,0,0,0],[1,0,0,0,1,1,0,1,1,2,5,28,12,0,0,0,0,0,0,0],[0,0,0,1,0,0,1,1,1,1,1,4,15,24,0,0,0,0,0,0],[1,0,1,0,0,0,0,1,0,1,1,1,2,16,23,0,0,0,0,0],[1,0,0,1,0,0,1,0,1,0,1,2,1,2,25,33,0,0,0,0],[1,0,0,0,0,1,0,0,1,1,0,0,1,1,8,17,25,0,0,0],[1,0,0,1,1,0,1,1,1,1,0,1,1,3,3,4,21,28,0,0],[1,0,0,0,0,0,1,1,0,1,2,1,0,2,2,3,5,17,21,0],[2,0,0,1,0,0,1,0,1,1,2,1,1,1,2,2,2,5,27,39]];
  function cc(v){if(v===0)return['#f1efe8','transparent'];if(v<=2)return['#E6F1FB','#185FA5'];if(v<=5)return['#B5D4F4','#0C447C'];if(v<=12)return['#85B7EB','#042C53'];if(v<=24)return['#378ADD','#fff'];return['#185FA5','#fff'];}
  var g='<div class="hm" style="grid-template-columns:50px repeat('+lms.length+',1fr); min-width:'+(50+lms.length*21)+'px;"><div></div>';
  for(var a=0;a<lms.length;a++){g+='<div class="colh"><span>'+lms[a]+'</span></div>';}
  for(var r=0;r<cms.length;r++){g+='<div class="lbl">'+cms[r]+'</div>';
    for(var q=0;q<lms.length;q++){var v=M[r][q],col=cc(v),di=(lms[q]===cms[r]);
      g+='<div class="c" title="'+cms[r]+' ← '+lms[q]+': '+v+'" style="background:'+col[0]+';color:'+col[1]+';'+(di?'box-shadow:inset 0 0 0 1.5px #04342C;':'')+'">'+(v>0?v:'')+'</div>';}}
  g+='</div>';
  document.getElementById('pHeat').innerHTML=g;

  // дозревание когорты (январская = столбец 8 матрицы M), кумулятивно вниз по месяцам подписания
  (function(){
    var col=8,cum=0,mat=[];
    for(var r=0;r<12;r++){cum+=M[r][col];mat.push(+(cum/leads[0]*100).toFixed(1));}
    var plateau=mat[mat.length-1],ml=['0','1','2','3','4','5','6','7','8','9','10','11'];
    new Chart(document.getElementById('pMat'),{data:{labels:ml,datasets:[
      {type:'line',data:mat,borderColor:'#185FA5',backgroundColor:'rgba(24,95,165,0.12)',borderWidth:2.6,pointRadius:3,tension:0.3,fill:true},
      {type:'line',data:ml.map(function(){return plateau;}),borderColor:'#888780',borderWidth:1.4,borderDash:[5,4],pointRadius:0}]},
      options:{responsive:true,maintainAspectRatio:false,
        plugins:{legend:{display:false},tooltip:{callbacks:{label:function(c){return c.parsed.y+'%';}}}},
        scales:{x:Object.assign({title:{display:true,text:'месяцев с прихода лида'}},XT),
          y:{beginAtZero:true,suggestedMax:32,title:{display:true,text:'дошло до договора, %'},ticks:{font:{size:10},callback:function(v){return v+'%';}}}}}});
  })();

  // конверсия «в лоб»: выход месяца (сумма строки M) / вход месяца (leads)
  (function(){
    var sr=M.map(function(row){return row.reduce(function(a,b){return a+b;},0);});
    var naive=sr.map(function(v,i){return +(v/leads[i]*100).toFixed(1);});
    new Chart(document.getElementById('pNaive'),{data:{labels:L,datasets:[
      {type:'line',data:naive,borderColor:'#C0392B',backgroundColor:'#C0392B',borderWidth:2.6,pointRadius:3,pointStyle:'rectRot',tension:0.25},
      {type:'line',data:L.map(function(){return 27;}),borderColor:'#185FA5',borderWidth:1.4,borderDash:[5,4],pointRadius:0}]},
      options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index',intersect:false},
        plugins:{legend:{display:false},tooltip:{callbacks:{label:function(c){return c.parsed.y+'%';}}}},
        scales:{x:XT,y:{beginAtZero:true,suggestedMax:90,title:{display:true,text:'договоры мес. / лиды мес., %'},ticks:{font:{size:10},callback:function(v){return v+'%';}}}}}});
  })();
})();