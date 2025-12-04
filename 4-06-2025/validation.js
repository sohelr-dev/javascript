class UserForm {
//   genderItem = "";
//   interestsItem = "";
  constructor(formName) {
    this.form = document.querySelector(formName);
//     console.log(this.form)
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
  }

handleSubmit(event) {
     event.preventDefault();
     // let userNameValid = this.checkUserName()

     let newWindow =window.open("","","width =400, height=700");
     newWindow.document.writeln("Name: " + this.form.name.value + "<br>")
     
     

}
// checkUserName(){
//      if(this.form.username.value === ""){
//           this.form.username.nextElementSibling.innerText ="User name requared*";
//           return false;
//      }else{
//           return true;
//      }
//           this.form.username.nextElementSibling.innerText = "";
// }  
}
