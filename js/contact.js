let formName = document.querySelector('#name');
formName.oninput = () => { formName.classList.add('form__invalid') };
let formEmail = document.querySelector('#email');
formEmail.oninput = () => { formName.classList.add('form__invalid') };
let formSubject = document.querySelector('#subject');
formSubject.oninput = () => { formName.classList.add('form__invalid') };
let formMessage = document.querySelector('#message');
formMessage.oninput = () => { formName.classList.add('form__invalid') };

document.querySelector('form').addEventListener('submit', (event) => {
   event.preventDefault();
   formName.classList.remove('form__invalid');
   formEmail.classList.remove('form__invalid');
   formSubject.classList.remove('form__invalid');
   formMessage.classList.remove('form__invalid');
   this.formName = formName.value;
   formName.value = "";
   this.formEmail = formEmail.value;
   formEmail.value = "";
   this.formSubject = formSubject.value;
   formSubject.value = "";
   this.formMessage = formMessage.value;
   formMessage.value = "";
   const result = {
      name: this.formName,
      email: this.formEmail,
      subject: this.formSubject,
      message: this.formMessage
   }
   localStorage.setItem(`form`, JSON.stringify(result));
   if (this.formSubject.toLowerCase() == "make an order") happyAnim();
});

function happyAnim() {
   document.querySelector('.happy-anim').style.display = 'flex';
   document.body.style.overflow ='hidden';
   setTimeout(() => {
      document.body.style.overflow ='';
      document.querySelector('.happy-anim').style.display = 'none';
}, 10000)
}