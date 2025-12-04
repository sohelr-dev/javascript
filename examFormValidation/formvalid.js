class feedbackForm{
     constructor(formName){
          this.form = document.querySelector(formName);
          this.form.addEventListener("submit",(e)=> this.handleSubmit(e));
     }
     handleSubmit(event){
          event.preventDefault();
          let userNameValid = this.checkUsername(),
          emailVaild= this.checkEmail(),
          feedbackValid= this.checkfeedback(),
          ratingValid= this.checkRating();

          if(userNameValid && emailVaild && feedbackValid){
               let newWindow =window.open("","","height=600, width=550");
               newWindow.document.writeln(`Name : ${this.form.username.value}<br> <br>`);
               newWindow.document.writeln(`Email : ${this.form.email.value}<br> <br>`);
               newWindow.document.writeln(`Feedback : ${this.form.feedback.value}<br> <br>`);
          }
     }
     checkUsername(){
          if(this.form.username.value===""){
               this.form.username.nextElementSibling.innerText="username is require";
               return false;
          }else{
               this.form.username.nextElementSibling.innerText="";
               return true;
          }
     }
     checkEmail(){
          let regexp=/^[A-Za-z0-9_.]{2,}[@]{1}[QA-Za-z0-9.-]{3,63}[.]{1}[a-z]{2,3}$/;
          if(this.form.email.value===""){
               this.form.email.nextElementSibling.innerText="username is require";
               return false;
          }else if (regexp.test(this.form.email.value)===false){
               this.form.email.nextElementSibling.innerText="invalid Email";
               return false;
          }else{
               this.form.email.nextElementSibling.innerText="";
               return true;
          }
     }
     checkfeedback(){
          if(this.form.feedback.value===""){
               this.form.feedback.nextElementSibling.innerText="feedback is require";
               return false;
          }else{
               this.form.feedback.nextElementSibling.innerText="";
               return true;
          }
     }
     


}