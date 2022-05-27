const form=document.getElementById('form');
const Name=document.getElementById('name');
const email=document.getElementById('email');
const password=document.getElementById('Password');
const checkbox=document.getElementById('checkbox');

// adding event submit to form 

form.addEventListener('submit',(e)=>{
e.preventDefault();
checkInputs();
});

//Checking inputs



function checkInputs() {
    const nameValue= Name.value.trim();
    const emailValue= email.value.trim();
    const passwordValue= password.value.trim();
    if(nameValue.length<3)
    {
        setError(Name,"Name must be at least 3 characters long");

    }
    else
    {
        setSuccess(Name);
    }
    if(emailValue.length==0)
    {
        
        setError(email,"Email can't be blank");
        

    }
    // else if(!(isEmail(email))){
    //     setError(email,"Enter a valid Email");
    // }
    else
    {
        setSuccess(email);
    }

    if(passwordValue.length>=6)
    {
        
        setSuccess(password);
      

    }
    else
    {
        setError(password,"Password must be at least 6 characters long");
    }
    if(checkbox.checked!=true)
    {
      document.querySelector("#checkbox small" ).textContent="Please check this field";
    }
   
   
    
}
// setError function

function setError(input,message)
{
    const formControl=input.parentElement;
    formControl.classList=" form-control1 error";
    const errorMessage=formControl.querySelector("small");
    errorMessage.textContent=message;
}
// set Success function
function setSuccess(input){
    const formControl=input.parentElement;
    formControl.classList=" form-control1  success";
    
}
function isEmail(email)
{
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
