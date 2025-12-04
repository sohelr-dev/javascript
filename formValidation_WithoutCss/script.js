class userForm {
    genderItem="";
    constructor(nameForm) {
        this.form = document.querySelector(nameForm);
        this.form.addEventListener("submit", (e) => this.handlesubmit(e));
    }
    handlesubmit(event) {
        event.preventDefault();
        let nameValid = this.checkName(),
        commentValid =this.Checkcomment(),
        emailValid =this.Checkemail(),
        genderValid =this.Checkgender(),
       passwordValid =this.Checkpassword(),
       comfirmpasswordValid =this.Checkcomfirmpassword()


        if (nameValid &&commentValid &&emailValid && genderValid && passwordValid && comfirmpasswordValid){
            let newWindow=window.open("","","width=300,height=600");
            newWindow.document.writeln(`Name: ${this.form.name.value} <br>`);
            newWindow.document.writeln(`comment: ${this.form.comment.value} <br>`);
            newWindow.document.writeln(`email: ${this.form.email.value} <br>`);
            newWindow.document.writeln(`gender: ${this.genderItem} <br>`);
        }
    }
    checkName() {
        if (this.form.name.value === "") {
            this.form.name.nextElementSibling.innerText = "name is required";
            return false;
        } else {
            this.form.name.nextElementSibling.innerText = "";
            return true;
        }
    }
    Checkcomment() {
        if (this.form.comment.value === "") {
            this.form.comment.nextElementSibling.innerText = "comment is required";
            return false;
        } else {
            this.form.comment.nextElementSibling.innerText = "";
            return true;
        }
    }
    Checkemail() {
        let reqExp= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (this.form.email.value === "") {
            this.form.email.nextElementSibling.innerText = "email is required";
            return false;
        } else if(reqExp.test(this.form.email.value)===false){
            this.form.email.nextElementSibling.innerText = "email is not valid";
            return false;
        }
        else {
            this.form.email.nextElementSibling.innerText = "";
            return true;
        }
    }
    Checkgender(){
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
    Checkpassword() {
        if (this.form.password.value === "") {
            this.form.password.nextElementSibling.innerText = "password is required";
            return false;
        } else {
            this.form.password.nextElementSibling.innerText = "";
            return true;
        }
    }
    Checkcomfirmpassword() {
        if (this.form.comfirmpassword.value === "") {
            this.form.comfirmpassword.nextElementSibling.innerText = "password is required";
            return false;
        } else if(this.form.comfirmpassword.value !==this.form.password.value){
            this.form.comfirmpassword.nextElementSibling.innerText = "passwords do not match";
            return false;
        }
        else {
            this.form.comfirmpassword.nextElementSibling.innerText = "";
            return true;
        }
    }
}
