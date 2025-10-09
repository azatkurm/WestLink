
const langBtn = document.getElementById('langBtn');
const langMenu = document.getElementById('langMenu');

if (langBtn && langMenu) {
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langBtn.classList.toggle('active');
    langMenu.style.display = langMenu.style.display === 'block' ? 'none' : 'block';
  });

  langMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      const selectedLang = e.target.dataset.lang;
      langBtn.querySelector('span').textContent = e.target.textContent.slice(0, 3);
      langMenu.style.display = 'none';
      langBtn.classList.remove('active');
      console.log('Выбран язык (header):', selectedLang);
    }
  });
}

const mobileLangBtn = document.getElementById('mobileLangBtn');
const mobileLangMenu = document.getElementById('mobileLangMenu');

if (mobileLangBtn && mobileLangMenu) {
  mobileLangBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileLangBtn.classList.toggle('active');
    mobileLangMenu.style.display = mobileLangMenu.style.display === 'block' ? 'none' : 'block';
  });

  mobileLangMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      const selectedLang = e.target.dataset.lang;
      mobileLangBtn.querySelector('span').textContent = e.target.textContent.slice(0, 3);
      mobileLangMenu.style.display = 'none';
      mobileLangBtn.classList.remove('active');
      console.log('Выбран язык (mobile):', selectedLang);
    }
  });
}


document.addEventListener('click', (e) => {
  if (langMenu && !langBtn.contains(e.target) && !langMenu.contains(e.target)) {
    langMenu.style.display = 'none';
    langBtn.classList.remove('active');
  }

  if (mobileLangMenu && !mobileLangBtn.contains(e.target) && !mobileLangMenu.contains(e.target)) {
    mobileLangMenu.style.display = 'none';
    mobileLangBtn.classList.remove('active');
  }
});


const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
});

document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }
});


const btn   = document.getElementById('mobileLangBtn');
const menu  = document.getElementById('mobileLangMenu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');   
  menu.classList.toggle('show');  
});

menu.addEventListener('click', e=>{
  if(e.target.tagName==='LI'){
    menu.querySelectorAll('li').forEach(li=>li.classList.remove('active'));
    e.target.classList.add('active');
    btn.querySelector('span').textContent=e.target.textContent.split(' ')[0]; 
    btn.classList.remove('open');
    menu.classList.remove('show');
  }
});
