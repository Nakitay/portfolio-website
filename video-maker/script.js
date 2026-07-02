const codeEl = document.getElementById('code');
const page = document.getElementById('page');
const hero = document.querySelector('.hero');

const snippets = [
  '<!doctype html>\n<html>\n  <head>\n    <title>My Site</title>\n  </head>\n  <body>',
  '<div class="hero">\n  <h1>Welcome</h1>\n</div>',
  '<style>\n  .hero{background:#1e6fd8;color:#fff}\n</style>',
  '<script>\n  console.log("loaded")\n</script>\n</body>\n</html>'
];

let idx = 0;let char = 0;let out = '';
function typeNext(){
  if(idx>=snippets.length) return;
  const s = snippets[idx];
  out += s[char]||'';
  codeEl.textContent = out + (char < s.length ? '▌' : '\n');
  if(char<s.length){char++;setTimeout(typeNext, 20);}else{idx++;char=0;setTimeout(typeNext,400);} 
  if(idx===1 && char===0) hero.classList.add('typing');
}

// subtle page scroll animation
let scroll = 0;setInterval(()=>{
  scroll = (scroll+1)%360;page.style.transform = `translateY(${Math.sin(scroll*Math.PI/180)*4}px)`
},40);

// start typing after small delay
setTimeout(()=>{typeNext()},800);

// end animation after 10s: signal ready by adding attribute
setTimeout(()=>{document.body.setAttribute('data-ready','true')},10000);
