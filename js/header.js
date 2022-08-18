const header = document.querySelector('header');
const menuItem = document.querySelectorAll('.menu__item');

window.onscroll = () => {
   let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
   let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   let scrolled = (windowScroll / height) * 100;
   document.querySelector('.progress').style.width = scrolled + '%';
};

const lightThemeBlock = document.querySelector('#light');
const darkThemeBlock = document.querySelector('#dark');

darkThemeBlock.onchange = () => { if (darkThemeBlock.checked) darkTheme() };
lightThemeBlock.onchange = () => { if (lightThemeBlock.checked) lightTheme() };

lightTheme();
function lightTheme() {

   menuItem.forEach(elem => {
      elem.onmouseover = () => {
         header.style.background = '#4e5052';
         document.querySelector('.theme').classList.add('theme_dark');
      };
      elem.onmouseleave = () => {
         header.style.background = 'rgb(126, 193, 193)';
         document.querySelector('.theme').classList.remove('theme_dark');
      };
   });

   header.style.background = 'rgb(126, 193, 193)';
   document.querySelector('.preloader').classList.remove('preloader_dark');
   document.querySelector('.happy-anim').classList.remove('happy-anim_dark');
   document.querySelector('header').className = '';
   document.querySelector('.theme').classList.remove('theme_dark');

   document.querySelector('.slider_section').classList.remove('slider_section_dark');

   document.querySelector('.about_section').classList.remove('about_section_dark');
   document.querySelector('#about__separator').remove();
   let blackSeparator = document.createElement('img');
   blackSeparator.alt = "Error";
   blackSeparator.src = "img/Separator.png";
   blackSeparator.id = "about__separator";
   document.querySelector('.about_section__separator').append(blackSeparator);

   document.querySelector('.portfolio_section').classList.remove('portfolio_section_dark');
   document.querySelector('#portfolio__separator').remove();
   blackSeparator = document.createElement('img');
   blackSeparator.alt = "Error";
   blackSeparator.src = "img/Separator.png";
   blackSeparator.id = "portfolio__separator";
   document.querySelector('.portfolio_section__separator').append(blackSeparator);

   document.querySelector('.blog_section').classList.remove('blog_section_dark');
   document.querySelector('#blog__separator').remove();
   blackSeparator = document.createElement('img');
   blackSeparator.alt = "Error";
   blackSeparator.src = "img/Separator.png";
   blackSeparator.id = "blog__separator";
   document.querySelector('.blog_section__separator').append(blackSeparator);
}

function darkTheme() {

   menuItem.forEach(elem => {
      elem.onmouseover = () => {
         header.style.background = 'rgb(126, 193, 193)';
      };
      elem.onmouseleave = () => {
         header.style.background = '#4e5052';
      };
   });
   
   header.style.background = '#4e5052';
   document.querySelector('.preloader').classList.add('preloader_dark');
   document.querySelector('.happy-anim').classList.add('happy-anim_dark');
   document.querySelector('header').className = 'header_dark';
   document.querySelector('.theme').classList.add('theme_dark');

   document.querySelector('.slider_section').classList.add('slider_section_dark');

   document.querySelector('.about_section').classList.add('about_section_dark');
   document.querySelector('#about__separator').remove();
   let whiteSeparator = document.createElement('img');
   whiteSeparator.alt = "Error";
   whiteSeparator.src = "img/SeparatorWhite.png";
   whiteSeparator.id = "about__separator";
   document.querySelector('.about_section__separator').append(whiteSeparator);

   document.querySelector('.portfolio_section').classList.add('portfolio_section_dark');
   document.querySelector('#portfolio__separator').remove();
   whiteSeparator = document.createElement('img');
   whiteSeparator.alt = "Error";
   whiteSeparator.src = "img/SeparatorWhite.png";
   whiteSeparator.id = "portfolio__separator";
   document.querySelector('.portfolio_section__separator').append(whiteSeparator);

   document.querySelector('.blog_section').classList.add('blog_section_dark');
   document.querySelector('#blog__separator').remove();
   whiteSeparator = document.createElement('img');
   whiteSeparator.alt = "Error";
   whiteSeparator.src = "img/SeparatorWhite.png";
   whiteSeparator.id = "blog__separator";
   document.querySelector('.blog_section__separator').append(whiteSeparator);

   document.querySelector('.progress').classList.add('progress_dark');
}
timeNow();
function timeNow() {
   const hoursNow = new Date().getHours();
   if ((hoursNow >= 21 && hoursNow <= 24) || (hoursNow >= 0 && hoursNow <= 6)) {
      darkThemeBlock.setAttribute("checked", "checked");
      darkTheme();
   } else {
      lightThemeBlock.setAttribute("checked", "checked");
   }
}