class traineeForm {
    courseList = "";
    constructor(formName) {
        this.form = document.querySelector(formName);
        this.form.addEventListener("submit", e => this.handleSubmit(e));
    }
    handleSubmit(event) {
        event.preventDefault();
        let courseValid = this.checkCourese();

        let newWindow = window.open("", "", "height=500,width=500");
        newWindow.document.writeln("Name: " + this.form.name.value + "<br>");
        newWindow.document.writeln("Contact: " + this.form.contact.value + "<br>");
        newWindow.document.writeln("Remarks: " + this.form.remarks.value + "<br>");
        newWindow.document.writeln("Remarks: " + this.form.sex.value + "<br>");
        newWindow.document.writeln("Courses: " + this.courseList + "<br>");
        newWindow.document.writeln("Location: " + this.form.location.value + "<br>");

    }
    checkCourese() {
        for (let c of this.form.courses) {
            if (c.checked) {
                this.courseList += c.value + " , ";
            }
        }
    }
}