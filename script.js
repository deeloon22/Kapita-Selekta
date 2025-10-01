// Small helpers
function scrollToSection(sel){document.querySelector(sel).scrollIntoView({behavior:'smooth'})}
function downloadCV(){alert('Fungsi unduh CV: ganti alert ini untuk menghubungkan file CV Anda.')}
function clearForm(){document.getElementById('name').value='';document.getElementById('email').value='';document.getElementById('message').value=''}


// Modal project
const modal = document.getElementById('modal');
function openModal(el){
const title = el.dataset.title || 'Proyek';
const desc = el.dataset.desc || '';
document.getElementById('modalTitle').textContent = title;
document.getElementById('modalDesc').textContent = desc;
document.getElementById('modalLink').href = '#';
modal.classList.add('open');
}
function closeModal(e){if(e) e.stopPropagation(); modal.classList.remove('open')}


// Skill bars animation on scroll
function animateSkills(){
document.querySelectorAll('.bar > i').forEach(el=>{
const pct = el.getAttribute('data-pct');
el.style.width = pct + '%';
})
}
// Simple visibility trigger
const obs = new IntersectionObserver((entries)=>{
entries.forEach(en=>{ if(en.isIntersecting) animateSkills() })
},{threshold:0.3})
obs.observe(document.querySelector('#skills'))


// Contact form handling (demo only)
function submitContact(e){
e.preventDefault();
const n = document.getElementById('name').value;
const em = document.getElementById('email').value;
const msg = document.getElementById('message').value;
if(!n||!em||!msg){alert('Lengkapi semua field.');return}
alert('Terima kasih, ' + n + '! Pesan Anda telah (demo) terkirim.');
clearForm();
}


// Typing effect for name in hero
const name = 'Nama Anda';
let idx = 0;
function typeName(){
const el = document.getElementById('nameTyped');
if(idx<=name.length){el.textContent = name.slice(0, idx); idx++; setTimeout(typeName, 80)}
}
typeName();


// Set current year
document.getElementById('year').textContent = new Date().getFullYear();


// Small accessibility: close modal with Esc
window.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeModal() })