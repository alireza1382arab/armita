const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
$('#start').onclick=()=>{$('#welcome').classList.remove('active');$('#album').classList.add('active');window.scrollTo(0,0)};
const pics=$$('.photo img');let i=0;
function open(n){i=(n+4)%4;$('#big').src=pics[i].src;$('#lightbox').classList.add('open')}
$$('.photo').forEach(x=>x.onclick=()=>open(+x.dataset.i));$('#close').onclick=()=>$('#lightbox').classList.remove('open');
$('#prev').onclick=()=>open(i-1);$('#next').onclick=()=>open(i+1);
const a=$('#audio'),b=$('#musicBtn');b.onclick=async()=>{if(a.paused){try{await a.play();b.textContent='❚❚'}catch(e){alert('اول فایل music/song.mp3 را داخل پروژه قرار بده.')}}else{a.pause();b.textContent='▶'}};
document.onkeydown=e=>{if(e.key==='Escape')$('#lightbox').classList.remove('open');if(e.key==='ArrowRight')open(i-1);if(e.key==='ArrowLeft')open(i+1)};
