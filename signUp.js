
// password eye icon or hide or show password JS code

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');

  
});
//     import{hints,validation,register,check} from "./signUp.js"
// console.log(check);
// function hints_text(){
// console.log("calling hints function")
// //document.querySelector('#hint_heading').innerHTML='';
//     let div1=document.createElement('div');
//     let div2=document.createElement('div');
//     let h4=document.createElement('h4');
//     h4.innerText="Your password must contain:";
//     let point1=document.createElement('p');
//     point1.innerText="8-20 charaters";
//     let point2=document.createElement('p');
//     point2.innerText="No more than 2 identical characters in a row";
//     let point3=document.createElement('p');
//     point3.innerText="A lowercase letter(a-z)";
//     let point4=document.createElement('p');
//     point4.innerText="An uppercase letter (A-Z)";
//     let point5=document.createElement('p');
//     point5.innerText="Number or special character";
//     div1.setAttribute('id',"hint_heading");
//     div2.setAttribute('id',"hints")
   
//    div1.append(h4);
  
//     div2.append(point1,point2,point3,point4,point5);
//     document.querySelector('#password_div').append(div1,div2);
    

//     }
    

//     function validation(){
      
//       let user=document.getElementById('first_name').value;
//       let surname=document.getElementById('surname').value;
//       let birthaday=document.getElementById('birthaday').value;
//       let gender=document.getElementById('gender').value;
//       let postal=document.getElementById('postal').value;
//       let prefered_store=document.getElementById('prefered_store').value;
//       let email=document.getElementById('email').value;
//       let password=document.getElementById('password').value;
      
      


//       if(user===''){
//           document.getElementById('username').innerHTML=" * please enter name field";
//           return false;
//       }
      
//       if(surname===''){
//           document.getElementById('surname_text').innerHTML=" * please enter username field";
//           return false;
//       }

      
//       if(birthaday===''){
//         document.getElementById('number_text').innerHTML=" * please enter birthaday field";
//         return false;
//     }

    
//     if(gender===''){
//       document.getElementById('gender_text').innerHTML=" * please enter username field";
//       return false;
//   }

  
//   if(postal===''){
//     document.getElementById('postal_text').innerHTML=" * please enter username field";
//     return false;
// }


// if(prefered_store===''){
//   document.getElementById('prefered_store_text').innerHTML=" * please enter username field";
//   return false;
// }


// if(email===''){
//   document.getElementById('email_text').innerHTML=" * please enter username field";
//   return false;
// }

// if(password===''){
//   document.getElementById('password_text').innerHTML=" * please enter username field";
//   return false;
// }

// return true;
// }
// let valid=validation();
//     if(valid){
//       console.log("All filled");
//     }else{
//       console.log("NNOOO");
//     }
// var all=validation()
//   console.log(all);

    const register=async()=>{
        event.preventDefault();
        try {
              let registrationData={
                firstName:document.getElementById('name').value,
                surname:document.getElementById('surname').value,
                number:document.getElementById('number').value,
                birthaday:document.getElementById('birthaday').value,
                gender:document.getElementById('gender').value,
                postalCode:document.getElementById('postal').value,
                preferedStore:document.getElementById('prefered_store').value,
                email:document.getElementById('email').value,
                password:document.getElementById('password').value,

              };

              //console.log( await registrationData.email);
              if(await check(registrationData.email)){
                let res=await fetch(`http://localhost:3005/users`,{
                  method:"POST",
                  body:JSON.stringify(registrationData),
                  headers:{
                    "Content-Type":"application/json"
                  }
                });
                let data= await res.json();
                console.log("DATA",data);
              }else{
                console.log(alert("CHOOSE ANOTHER EMAIL"))
              }

      } catch (error) {
          console.log(error);
        }
      }
   
        
 
   
 

// var lable=document.getElementById('name').innerText;
//   console.log(lable);
// if(document.getElementById('name').innerText.length>0){
//   var lable=document.getElementById('name_label').innerText;
//   console.log(lable);
// }
// let check="VENKY";
// export{hints,validation,register,check}
// function back_navigation(){
//   alert("done");
//   window.location.href="./login.html"
// }
async function check(x){
  

    // let email=document.getElementById("forgot_password_request").value;
  
    try{
      console.log(x);
      let res= await fetch(`http://localhost:3005/users?email=${x}`);
  
      let data= res.json();
      var f=data.email;
      console.log(f);
      if(f==x){
        console.log("DID?")
        return false;
      }
    } catch (error) {
      console.log(error);
      }

    return true
  
}
  






  