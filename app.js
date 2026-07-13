const BASES={
  手套:[
    {name:'泰坦長手套',level:52,req:'64 力量',stats:['護甲值: 185'],tags:['armour']},
    {name:'精良護腕',level:45,req:'56 敏捷',stats:['閃避值: 176'],tags:['evasion']},
    {name:'刺繡手套',level:52,req:'64 智慧',stats:['能量護盾: 68'],tags:['energy']},
    {name:'華麗護手',level:65,req:'44 力量, 44 敏捷',stats:['護甲值: 102','閃避值: 95'],tags:['armour','evasion']}
  ],
  鞋子:[
    {name:'龍膚長靴',level:80,req:'108 敏捷',stats:['閃避值: 221'],tags:['evasion','boots']},
    {name:'泰坦護脛',level:65,req:'80 力量',stats:['護甲值: 252'],tags:['armour','boots']},
    {name:'絲綢便鞋',level:65,req:'80 智慧',stats:['能量護盾: 91'],tags:['energy','boots']}
  ],
  頭部:[
    {name:'巨人王冠',level:65,req:'80 力量',stats:['護甲值: 296'],tags:['armour','helmet']},
    {name:'獵人風帽',level:65,req:'80 敏捷',stats:['閃避值: 284'],tags:['evasion','helmet']},
    {name:'秘術王冠',level:65,req:'80 智慧',stats:['能量護盾: 104'],tags:['energy','helmet']}
  ],
  胸甲:[
    {name:'巨神胸甲',level:65,req:'80 力量',stats:['護甲值: 612'],tags:['armour','body']},
    {name:'刺客外套',level:65,req:'80 敏捷',stats:['閃避值: 596'],tags:['evasion','body']},
    {name:'賢者長袍',level:65,req:'80 智慧',stats:['能量護盾: 218'],tags:['energy','body']}
  ],
  戒指:[
    {name:'藍玉戒指',level:1,req:'無',stats:['固定詞綴: +20% 冰冷抗性'],tags:['ring']},
    {name:'紅玉戒指',level:1,req:'無',stats:['固定詞綴: +20% 火焰抗性'],tags:['ring']},
    {name:'黃玉戒指',level:1,req:'無',stats:['固定詞綴: +20% 閃電抗性'],tags:['ring']}
  ],
  項鍊:[
    {name:'星盤項鍊',level:1,req:'無',stats:['固定詞綴: +10 全能力值'],tags:['amulet']},
    {name:'翠玉護身符',level:1,req:'無',stats:['固定詞綴: +20 敏捷'],tags:['amulet']}
  ],
  單手武器:[
    {name:'權貴之劍',level:65,req:'80 力量, 80 敏捷',stats:['物理傷害: 42-78','每秒攻擊次數: 1.45','暴擊率: 5.00%'],tags:['weapon','attack']},
    {name:'魔導法杖',level:65,req:'80 智慧',stats:['物理傷害: 28-51','每秒攻擊次數: 1.20','暴擊率: 8.00%'],tags:['weapon','caster']}
  ]
};

const MODS=[
 {side:'prefix',group:'life',text:'+{v} 最大生命',tiers:[[1,20,39,1000],[15,40,59,900],[30,60,79,750],[45,80,99,550],[60,100,129,350],[75,130,159,180]]},
 {side:'prefix',group:'mana',text:'+{v} 最大魔力',tiers:[[1,18,35,800],[20,36,55,700],[40,56,75,500],[60,76,99,250]]},
 {side:'prefix',group:'defence',tags:['armour'],text:'增加 {v}% 護甲值',tiers:[[1,20,39,900],[25,40,59,750],[45,60,79,500],[65,80,109,240]]},
 {side:'prefix',group:'defence',tags:['evasion'],text:'增加 {v}% 閃避值',tiers:[[1,20,39,900],[25,40,59,750],[45,60,79,500],[65,80,109,240]]},
 {side:'prefix',group:'defence',tags:['energy'],text:'增加 {v}% 能量護盾',tiers:[[1,20,39,900],[25,40,59,750],[45,60,79,500],[65,80,109,240]]},
 {side:'prefix',group:'phys',tags:['weapon'],text:'增加 {v}% 物理傷害',tiers:[[1,20,39,900],[25,40,59,700],[45,60,89,450],[65,90,129,190]]},
 {side:'prefix',group:'ele',tags:['weapon'],text:'附加 {v} 火焰傷害',tiers:[[1,1,8,850],[20,9,18,650],[40,19,31,420],[60,32,49,190]]},
 {side:'suffix',group:'fire',text:'+{v}% 火焰抗性',tiers:[[1,8,17,1000],[20,18,27,850],[40,28,37,650],[60,38,47,350],[75,48,55,160]]},
 {side:'suffix',group:'cold',text:'+{v}% 冰冷抗性',tiers:[[1,8,17,1000],[20,18,27,850],[40,28,37,650],[60,38,47,350],[75,48,55,160]]},
 {side:'suffix',group:'lightning',text:'+{v}% 閃電抗性',tiers:[[1,8,17,1000],[20,18,27,850],[40,28,37,650],[60,38,47,350],[75,48,55,160]]},
 {side:'suffix',group:'chaos',text:'+{v}% 混沌抗性',tiers:[[1,5,10,700],[25,11,16,500],[50,17,23,250],[75,24,30,100]]},
 {side:'suffix',group:'attribute',text:'+{v} 點力量',tiers:[[1,5,12,750],[30,13,20,500],[60,21,30,220]]},
 {side:'suffix',group:'attribute2',text:'+{v} 點敏捷',tiers:[[1,5,12,750],[30,13,20,500],[60,21,30,220]]},
 {side:'suffix',group:'attribute3',text:'+{v} 點智慧',tiers:[[1,5,12,750],[30,13,20,500],[60,21,30,220]]},
 {side:'suffix',group:'speed',tags:['boots'],text:'增加 {v}% 移動速度',tiers:[[1,10,15,700],[30,16,20,500],[50,21,25,300],[70,26,30,120]]},
 {side:'suffix',group:'attackSpeed',tags:['weapon'],text:'增加 {v}% 攻擊速度',tiers:[[1,3,5,700],[30,6,8,450],[60,9,12,180]]},
 {side:'suffix',group:'castSpeed',tags:['caster'],text:'增加 {v}% 施放速度',tiers:[[1,3,5,700],[30,6,9,450],[60,10,13,180]]},
 {side:'suffix',group:'rarity',text:'增加 {v}% 找到的物品稀有度',tiers:[[1,5,10,500],[35,11,18,280],[65,19,25,100]]}
];

const CURRENCIES=[
 {id:'transmute',name:'蛻變石',note:'普通 → 魔法（1詞綴）'},
 {id:'augment',name:'增幅石',note:'魔法新增1詞綴'},
 {id:'regal',name:'富豪石',note:'魔法 → 稀有 +1'},
 {id:'alchemy',name:'點金石',note:'普通/魔法 → 稀有4詞綴'},
 {id:'exalt',name:'崇高石',note:'稀有新增1詞綴'},
 {id:'chaos',name:'混沌石',note:'稀有移除1條並新增1條'},
 {id:'annul',name:'無效石',note:'移除1條隨機詞綴'},
 {id:'scour',name:'重鑄石',note:'移除全部詞綴'},
 {id:'greaterTransmute',name:'高階蛻變石',note:'最低詞綴等級44'},
 {id:'perfectTransmute',name:'完美蛻變石',note:'最低詞綴等級70'},
 {id:'greaterExalt',name:'高階崇高石',note:'最低詞綴等級35'},
 {id:'perfectExalt',name:'完美崇高石',note:'最低詞綴等級50'}
];

let state={category:'手套',baseIndex:1,itemLevel:82,quality:0,rarity:'normal',mods:[],history:[],cost:0,snapshots:[]};
const $=s=>document.querySelector(s); const $$=s=>[...document.querySelectorAll(s)];
function rand(a,b){return Math.floor(Math.random()*(b-a+1))+a}
function validMods(side,minTier=0){
 const base=BASES[state.category][state.baseIndex];
 return MODS.flatMap(m=>{
   if(m.side!==side) return [];
   if(m.tags && !m.tags.some(t=>base.tags.includes(t))) return [];
   if(state.mods.some(x=>x.group===m.group)) return [];
   return m.tiers.map((t,i)=>({def:m,tier:i+1,level:t[0],min:t[1],max:t[2],weight:t[3]}))
     .filter(x=>x.level<=state.itemLevel && x.level>=minTier);
 });
}
function rollMod(side,minTier=0){
 let pool=validMods(side,minTier); if(!pool.length)return null;
 const sum=pool.reduce((a,x)=>a+x.weight,0);let r=Math.random()*sum;
 for(const x of pool){r-=x.weight;if(r<=0){const value=rand(x.min,x.max);return {side,group:x.def.group,text:x.def.text.replace('{v}',value),tier:x.tier,level:x.level,weight:x.weight}}}
 return null;
}
function addRandomMod(minTier=0){
 const prefixCount=state.mods.filter(m=>m.side==='prefix').length;
 const suffixCount=state.mods.filter(m=>m.side==='suffix').length;
 let sides=[]; if(prefixCount<3&&validMods('prefix',minTier).length)sides.push('prefix'); if(suffixCount<3&&validMods('suffix',minTier).length)sides.push('suffix');
 if(!sides.length)return false; const mod=rollMod(sides[rand(0,sides.length-1)],minTier); if(mod){state.mods.push(mod);return true} return false;
}
function snap(){state.snapshots.push(JSON.stringify({...state,snapshots:[]}));if(state.snapshots.length>30)state.snapshots.shift()}
function log(text,cost=0){state.history.unshift({text,time:new Date().toLocaleTimeString('zh-TW',{hour:'2-digit',minute:'2-digit',second:'2-digit'})});state.cost+=cost;render()}
function applyCurrency(id){
 snap(); let ok=true,msg='';
 const actions={
 transmute:()=>{if(state.rarity!=='normal')return false;state.rarity='magic';addRandomMod(0);return true},
 greaterTransmute:()=>{if(state.rarity!=='normal')return false;state.rarity='magic';addRandomMod(44);return true},
 perfectTransmute:()=>{if(state.rarity!=='normal')return false;state.rarity='magic';addRandomMod(70);return true},
 augment:()=>{if(state.rarity!=='magic'||state.mods.length>=2)return false;return addRandomMod(0)},
 regal:()=>{if(state.rarity!=='magic')return false;state.rarity='rare';return addRandomMod(0)},
 alchemy:()=>{if(!['normal','magic'].includes(state.rarity))return false;state.rarity='rare';state.mods=[];for(let i=0;i<4;i++)addRandomMod(0);return true},
 exalt:()=>{if(state.rarity!=='rare'||state.mods.length>=6)return false;return addRandomMod(0)},
 greaterExalt:()=>{if(state.rarity!=='rare'||state.mods.length>=6)return false;return addRandomMod(35)},
 perfectExalt:()=>{if(state.rarity!=='rare'||state.mods.length>=6)return false;return addRandomMod(50)},
 chaos:()=>{if(state.rarity!=='rare'||!state.mods.length)return false;state.mods.splice(rand(0,state.mods.length-1),1);return addRandomMod(0)},
 annul:()=>{if(!state.mods.length)return false;state.mods.splice(rand(0,state.mods.length-1),1);return true},
 scour:()=>{if(!state.mods.length)return false;state.mods=[];state.rarity='normal';return true}
 };
 ok=actions[id]?.(); const cur=CURRENCIES.find(c=>c.id===id);
 if(ok)log(`使用 ${cur.name}`,1);else{state.snapshots.pop();$('#status').textContent=`目前無法使用 ${cur.name}`;setTimeout(()=>$('#status').textContent='',1800)}
}
function rareName(){const a=['靈魂','風暴','龍鳴','幽影','災禍','命運','星辰','鮮血'];const b=['之握','守護','風暴','套具','之觸','之幕','之殼'];return a[(state.mods.length+state.cost)%a.length]+b[(state.itemLevel+state.mods.length)%b.length]}
function render(){
 const base=BASES[state.category][state.baseIndex];
 $('#itemCard').className='item-card '+state.rarity;
 const rarityText={normal:'普通',magic:'魔法',rare:'稀有'}[state.rarity]; $('#rarityLabel').textContent=rarityText;
 $('#itemName').textContent=state.rarity==='rare'?rareName():state.rarity==='magic'?(state.mods[0]?.text.split(' ')[0]||'魔法')+'之 '+base.name:base.name;
 $('#baseName').textContent=base.name;
 $('#baseStats').innerHTML=base.stats.map(s=>`<div>${s}</div>`).join('')+(state.quality?`<div>品質: +${state.quality}%</div>`:'');
 $('#requirements').textContent=`物品等級: ${state.itemLevel}｜需求: 等級 ${base.level}${base.req==='無'?'':', '+base.req}`;
 $('#mods').className='mods'+(state.mods.length?'':' empty'); $('#mods').innerHTML=state.mods.length?state.mods.map(m=>`<div class="mod ${m.side}">${m.text}<span class="tier">T${m.tier}</span></div>`).join(''):'尚無詞綴';
 $('#actionCount').textContent=state.history.length;$('#costCount').textContent=state.cost+' 通貨';
 $('#history').innerHTML=state.history.map(h=>`<li>${h.text}<time>${h.time}</time></li>`).join('')||'<li>尚無操作</li>';
 renderPool(document.querySelector('.tab.active').dataset.side);
}
function renderPool(side){
 const pool=validMods(side,0);const sum=pool.reduce((a,x)=>a+x.weight,0);$('#pool').innerHTML=pool.length?pool.map(x=>`<div class="pool-row"><span>${x.def.text.replace('{v}',`${x.min}–${x.max}`)} <small>T${x.tier} / iLv.${x.level}</small></span><span>${$('#showWeights').checked?x.weight:((x.weight/sum)*100).toFixed(1)+'%'}</span></div>`).join(''):'<div class="empty">沒有可用詞綴或詞綴欄位已滿。</div>'
}
function init(){
 $('#category').innerHTML=Object.keys(BASES).map(x=>`<option>${x}</option>`).join('');renderBases();
 $('#currencyGrid').innerHTML=CURRENCIES.map(c=>`<button class="currency" data-id="${c.id}"><b>${c.name}</b><small>${c.note}</small></button>`).join('');
 $$('.currency').forEach(b=>b.onclick=()=>applyCurrency(b.dataset.id));
 $('#category').onchange=e=>{state.category=e.target.value;state.baseIndex=0;renderBases();newItem()};
 $('#base').onchange=e=>{state.baseIndex=+e.target.value;newItem()};
 $('#createItem').onclick=newItem;
 $('#itemLevel').onchange=e=>state.itemLevel=Math.max(1,Math.min(100,+e.target.value||1));
 $('#quality').onchange=e=>{state.quality=Math.max(0,Math.min(30,+e.target.value||0));render()};
 $('#undo').onclick=()=>{const s=state.snapshots.pop();if(s){const snaps=state.snapshots;state=JSON.parse(s);state.snapshots=snaps;render()}};
 $('#resetAll').onclick=()=>{state={category:'手套',baseIndex:1,itemLevel:82,quality:0,rarity:'normal',mods:[],history:[],cost:0,snapshots:[]};$('#category').value=state.category;renderBases();$('#base').value=1;$('#itemLevel').value=82;$('#quality').value=0;render()};
 $('#copyItem').onclick=async()=>{const base=BASES[state.category][state.baseIndex];const text=[{normal:'普通',magic:'魔法',rare:'稀有'}[state.rarity],$('#itemName').textContent,base.name,`物品等級: ${state.itemLevel}`,...base.stats,...state.mods.map(m=>m.text)].join('\n');try{await navigator.clipboard.writeText(text);$('#status').textContent='已複製物品文字'}catch{$('#status').textContent='瀏覽器禁止剪貼簿存取'}};
 $$('.tab').forEach(t=>t.onclick=()=>{$$('.tab').forEach(x=>x.classList.remove('active'));t.classList.add('active');renderPool(t.dataset.side)});
 $('#showWeights').onchange=()=>renderPool(document.querySelector('.tab.active').dataset.side);
 render();
}
function renderBases(){const arr=BASES[state.category];$('#base').innerHTML=arr.map((b,i)=>`<option value="${i}">${b.name}</option>`).join('');$('#base').value=state.baseIndex}
function newItem(){snap();state.itemLevel=Math.max(1,Math.min(100,+$('#itemLevel').value||1));state.quality=Math.max(0,Math.min(30,+$('#quality').value||0));state.rarity='normal';state.mods=[];log(`建立 ${BASES[state.category][state.baseIndex].name}`)}
init();
