class signupForm{
     genderItem="";
     skillsItem="";
     constructor(formName){
          this.form=document.querySelector(formName);
          this.form.addEventListener("submit",(e)=> this.handleSubmit(e));
     }

     handleSubmit(event){
          event.preventDefault();
          let emailValid=this.checkemail();
          let passwordValid=this.checkpassword();
          let comfirmpassworddValid=this.checkcomfirmpassword();
          let genderValid=this.checkgender();
          let skillsValid=this.checkskills();


          if(emailValid && passwordValid && comfirmpassworddValid && genderValid && skillsValid ){
               let newWind=window.open("","","height=700 , width= 600");
               newWind.document.writeln(`Email : ${this.form.email.value} <br><br>`);
               newWind.document.writeln(`Gender : ${this.genderItem} <br><br>`);
               newWind.document.writeln(`Gender : ${this.skillsItem} <br><br>`);

          }
     }

     checkemail(){
          let reqExp= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if(this.form.email.value ===""){
               this.form.email.nextElementSibling.innerText ="email is require ";
               return false;
          }else if (reqExp.test(this.form.email.value)===false){
               this.form.email.nextElementSibling.innerText ="Invalid Email ";
               return false;
          }
          else{
               this.form.email.nextElementSibling.innerText ="";
               return true;
          }
     }
     checkpassword(){
          if(this.form.password.value ===""){
               this.form.password.nextElementSibling.innerText ="password is require ";
               return false;
          }
          else{
               this.form.password.nextElementSibling.innerText ="";
               return true;
          }
     }
     checkcomfirmpassword(){
          if(this.form.comfirmpassword.value ===""){
               this.form.comfirmpassword.nextElementSibling.innerText ="comfirmpassword is require ";
               return false;
          }else if(this.form.comfirmpassword.value !=this.form.password.value){
               this.form.comfirmpassword.nextElementSibling.innerText ="Password does't Match ";
               return false;
          }
          else{
               this.form.comfirmpassword.nextElementSibling.innerText ="";
               return true;
          }
     }
     
     checkgender(){
          for(let g of this.form.gender){
               if(g.checked){
                    this.genderItem=g.value;
                    break;
               }
          }
          if (this.genderItem === "") {
            this.form.querySelector(".gender_error").innerText="gender is required";
            return false;
        }else{
            this.form.querySelector(".gender_error").innerText="";
            return true;
        }
     }
     checkskills(){
          for(let g of this.form.skills){
               if(g.checked){
                    this.skillsItem +=g.value + " , ";
               }
          }
          if (this.skillsItem === "") {
            this.form.querySelector(".skills_error").innerText="Skills is required";
            return false;
        }else{
            this.form.querySelector(".skills_error").innerText="";
            return true;
        }
     }
     
}