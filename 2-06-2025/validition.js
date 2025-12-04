
class RegForm {
     genderItem ="";
     coursesList ="";
     constructor(formName){
           this.form = document.querySelector(formName);
           this.form.addEventListener("submit" ,(e) => this.handleSubmit(e));        //(handleSubmit) nijer moto kore make kora
     }
     handleSubmit(event){
          event.preventDefault();
          let userNameValid = this.checkUserName(),
          emailVaild = this.checkEmail(),
          genderValid =this.checkGender(),
          coursesValid = this.checkcourses()
          // console.log(emailVaild)

          if(userNameValid && emailVaild && genderValid && coursesValid){
               // this.form.submit();
               let newWindow= window.open("","","height=600, width=450");
               newWindow.document.writeln(`Name : ${this.form.ful_name.value}<br> <br>`);
               newWindow.document.writeln(`Email : ${this.form.email.value}<br> <br>`);
          }
     }
     //username
     checkUserName(){
          if(this.form.ful_name.value === ""){
               this.form.ful_name.nextElementSibling.innerText ="User name requared*";
               return false;
          }else{
               this.form.ful_name.nextElementSibling.innerText = "";
               return true;
          }
     }     
     // email
     checkEmail(){
          let regexp=/^[A-Za-z0-9_.]{2,}[@]{1}[QA-Za-z0-9.-]{3,63}[.]{1}[a-z]{2,3}$/;
          if(this.form.email.value === ""){
               this.form.email.nextElementSibling.innerText ="email is requared*";
               return false;
          }else if(regexp.test(this.form.email.value) ===false){
               this.form.email.nextElementSibling.innerText ="Invlid email*";
               return false;
          }
          else{
               this.form.email.nextElementSibling.innerText = "";
               return true;
          }
          
     }
     //gender
     checkGender(){
          let genderElement = this.form.gender.value;
          for(let g of genderElement){
               if(g.checked){
                    this.genderItem = g.value;
                    break;
               }
          }
          if(this.genderItem === ""){
               this.form.querySelector(".gender-error").innerText ="gender is requared*";
               return false;
          }else{
               this.form.querySelector(".gender-error").innerText = "";
               return true;
          }
     }
     //courses
     checkcourses(){
          let coursesElement = this.form.courses.value;
          for(let g of coursesElement){
               if(g.checked){
                    this.coursesList += g.value + " , ";
                    break;
               }
          }
          if(this.coursesList === ""){
               this.form.querySelector(".courses-error").innerText ="Ccourses is requared*";
               return false;
          }else{
               this.form.querySelector(".courses-error").innerText = "";
               return true;
          }
     }
     
}
