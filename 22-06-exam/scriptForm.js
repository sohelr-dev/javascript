class SurForm {
  SatisfactionItem="";
  servicesItem="";
  constructor(nameForm) {
    this.form = document.querySelector(nameForm);
    this.form.addEventListener("submit", (e) => this.handlesubmit(e));
  }
  handlesubmit(event) {
    event.preventDefault();
    
    let nameValid = this.checkName();
    let emailValid = this.checkemail();
    let suggestionValid = this.checksuggestion();
    let SatisfactionValid = this.checkSatisfaction();
    let servicesValid = this.checkservices();
    // let membershipValid = this.checkmembership();



    if (nameValid && emailValid && suggestionValid && SatisfactionValid && servicesValid ) {
      let newWindow = window.open("", "", "width=600,height=600");
      newWindow.document.writeln(`Name: ${this.form.name.value} <br><br>`);
      newWindow.document.writeln(`Email: ${this.form.email.value} <br><br>`);
      newWindow.document.writeln(`Suggestion: ${this.form.suggestion.value} <br><br>`);
      newWindow.document.writeln(`Satisfaction level: ${this.SatisfactionItem} <br><br>`);
      newWindow.document.writeln(`Services: ${this.servicesItem} <br><br>`);
      // newWindow.document.writeln(`Services: ${this.membership} <br><br>`);
      
    }
  }
  checkName(){
     if(this.form.name.value === ""){
          this.form.name.nextElementSibling.innerText="full Name is require";
          return false;
     }else{
          this.form.name.nextElementSibling.innerText="";
          return true;
     }
  }
  checkemail(){
    let reqExp= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     if(this.form.email.value === ""){
          this.form.email.nextElementSibling.innerText=" email is require";
          return false;
     }else if(reqExp.test(this.form.email.value)===false){
        this.form.email.nextElementSibling.innerText="Invalid email";
          return false;
     }
     else{
          this.form.email.nextElementSibling.innerText="";
          return true;
     }
  }
  checksuggestion(){
     if(this.form.suggestion.value === ""){
          this.form.suggestion.nextElementSibling.innerText="suggestion is require";
          return false;
     }else{
          this.form.suggestion.nextElementSibling.innerText="";
          return true;
     }
  }
  
  checkSatisfaction(){
        for(let g of this.form.Satisfaction){
            if(g.checked){
                this.SatisfactionItem=g.value;
                break;
            }
        }
        if (this.SatisfactionItem === "") {
            this.form.querySelector(".Satisfaction-error").innerText="Satisfaction is required";
            return false;
        }else{
            this.form.querySelector(".Satisfaction-error").innerText="";
            return true;
        }
    }
  checkservices(){
        for(let g of this.form.services){
            if(g.checked){
                this.servicesItem=g.value;
                break;
            }
        }
        if (this.servicesItem === "") {
            this.form.querySelector(".services-error").innerText="services is required";
            return false;
        }else{
            this.form.querySelector(".services-error").innerText="";
            return true;
        }
    }
  // checkmembership(){
  //       if (this.form.membership.value === "") {
  //           this.form.querySelector(".membership-error").innerText="membership is required";
  //           return false;
  //       }else{
  //           this.form.querySelector("membership-error").innerText="";
  //           return true;
  //       }
  //   }


  




}
