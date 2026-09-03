// personal-site — light only, built properly
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e,i) => {
    if(e.isIntersecting) setTimeout(()=>e.target.classList.add('visible'), i*70);
  });
},{threshold:0.08});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// active nav on scroll
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-links a');
if(sections.length && navLinks.length){
  const spy = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const id = entry.target.id;
        navLinks.forEach(a=>a.classList.toggle('active', a.getAttribute('href')==='#'+id));
      }
    });
  },{rootMargin:'-45% 0px -45% 0px', threshold:0});
  sections.forEach(s=>spy.observe(s));
}
