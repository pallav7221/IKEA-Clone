const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#id_password');
 
  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

const login=async()=>{
    try {
      
        let useremail=document.querySelector('#username').value;
        let password=document.querySelector('#id_password').value;
      

      let res=await fetch(`http://localhost:3005/users`);
      let data=await res.json();
      console.log(data)
      let istrue=false;
      data.forEach(function(details){
        if(details.email===useremail && details.password===password){
          istrue=true;
          }
  });
  
  if(istrue){
      alert("Login Successful");
      goto()
      // window.location.href="#";
      
  }else{
      alert("Try to reset your password its my solve your problem");
  }

      
    } catch (error) {
      console.log(error)
    }
}

const forgot=async()=>{

  let email=document.getElementById("forgot_password_request").value;

  try {
    let res= await fetch(`http://localhost:3005/users?email=${email}`);

    let data= res.json();
    console.log(data);
  } catch (error) {
    
  }

}

function goto(){
  
  window.location.href="./signUp.html"
}

//export {forgot} from ;