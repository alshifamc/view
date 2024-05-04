
(function() {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }


  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }


  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  let selectHeader = select('#header')
  let selectTopbar = select('#topbar')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled')
        }
      } else {
        selectHeader.classList.remove('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled')
        }
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })



  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)


  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });


  const glightbox = GLightbox({
    selector: '.glightbox'
  });


   let backtotop = select('.back-to-top')
   if (backtotop) {
     const toggleBacktotop = () => {
       if (window.scrollY > 100) {
         backtotop.classList.add('active')
       } else {
         backtotop.classList.remove('active')
       }
     }
     window.addEventListener('load', toggleBacktotop)
     onscroll(document, toggleBacktotop)
   }

})()


//  ** Contact Form

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  

  var formData = {
    name: document.getElementById('name2').value,
    email: document.getElementById('email2').value,
    subject: document.getElementById('subject2').value,
    message: document.getElementById('message2').value
  };


  localStorage.setItem('formData', JSON.stringify(formData));


  document.getElementById('name2').value = '';
  document.getElementById('email2').value = '';
  document.getElementById('subject2').value = '';
  document.getElementById('message2').value = '';


  alert('شكراً لتواصلك معنا ♥ ');
});



// ** Make Appointment Form


document.getElementById('app_form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  

  var formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    date: document.getElementById('date').value,
    age: document.getElementById('age').value,
    doctor: document.getElementById('doctor').value,
    message: document.getElementById('message').value
  };

 
  localStorage.setItem('formData', JSON.stringify(formData));


  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('date').value = '';
  document.getElementById('age').value = '';
  document.getElementById('doctor').value = '';
  document.getElementById('message').value = '';

  
  alert('لقد تم حجز موعد سوف يتم الرد عليك قريباً');
});


// ** Subscride Form

document.getElementById('subscribe').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  
  var formData = {
    email: document.getElementById('email').value
  };

  
  localStorage.setItem('formData', JSON.stringify(formData));

  
  document.getElementById('email').value = ' ';


  alert('🎉 انت الان مشترك في نشرتنا الاخبارية ');
});



