let uname=document.getElementById('name');
let email=document.getElementById('email');
let phone=document.getElementById('phone');
let emvalidity=false;
let namevalidity=false;
let phvalidity=false;
 
uname.addEventListener('blur',()=>{ 
    let regex=/^[a-zA-Z][0-9a-zA-Z]{1,9}$/;
    let valid=document.getElementById('nameInvalid');
    let str=uname.value;
    if(regex.test(str)){
        uname.classList.add('is-valid');
        uname.classList.remove('is-invalid');
        valid.innerHTML=`Looks good!`;
        valid.classList.remove('invalid-feedback');
        valid.classList.add('valid-feedback');
        namevalidity=true;
    }
    else{
        uname.classList.add('is-invalid');
        uname.classList.remove('is-valid');
        valid.innerHTML=`Username must be 2-10 character long and should not start with number.`
        valid.classList.remove('valid-feedback');
        valid.classList.add('invalid-feedback');
        namevalidity=false;
    }
})
phone.addEventListener('blur',()=>{ 
    let regex=/^[0-9][0-9]{9}$/;
    let phvalid=document.getElementById('phoneInvalid');
    let str=phone.value;
    if(regex.test(str)){
        phone.classList.add('is-valid');
        phone.classList.remove('is-invalid');
        phvalid.innerHTML=`Looks good!`;
        phvalid.classList.remove('invalid-feedback');
        phvalid.classList.add('valid-feedback');
        phvalidity=true;

    }
    else{
        phone.classList.add('is-invalid');
        phone.classList.remove('is-valid');
        phvalid.innerHTML=`Phone number should be 10 digits.`
        phvalid.classList.remove('valid-feedback');
        phvalid.classList.add('invalid-feedback');
        phvalidity=false;
    }
})

email.addEventListener('blur',()=>{ 
    let regex=/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let emvalid=document.getElementById('emailInvalid');
    let str=email.value;
    if(regex.test(str)){
        email.classList.add('is-valid');
        email.classList.remove('is-invalid');
        emvalid.innerHTML=`Looks good!`;
        emvalid.classList.remove('invalid-feedback');
        emvalid.classList.add('valid-feedback');
        emvalidity=true;

    }
    else{
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
        emvalid.innerHTML=`Please write a valid email.`
        emvalid.classList.remove('valid-feedback');
        emvalid.classList.add('invalid-feedback');
        emvalidity=false;

    }
})

let sub=document.getElementById('submit');
sub.addEventListener('click',(e)=>{
    let alt=document.getElementById('msg');
    if(emvalidity&&phvalidity&&namevalidity){
    alt.innerHTML=` <div id="success" class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Success! </strong> Your travel request has been submitted successfully.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
    }
    else if(!emvalidity||!phvalidity||!namevalidity){
        alt.innerHTML=` <div id="danger" class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error!</strong> Please enter valid username, email and phone number.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`; 
    }
    setTimeout(() => {
        alt.innerHTML='';
    }, 4000);
  e.preventDefault();
})
