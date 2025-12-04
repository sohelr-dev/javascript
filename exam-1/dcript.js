class Onli{
     coursesList="";
     constructor(forname){
          this.form =document.querySelector(forname);
          this.form.addEventListener("submit",(e)=> this.handleSubmit(e));
     }

     handleSubmit(event){
          event.preventDefault();
          this.checkCourse();

          let newDoc = window.open("","","height=600,width=400");
          newDoc.document.writeln("<h3> Validation Data </h3>")
          newDoc.document.writeln(`Name : ${this.form.name.value} <br><br>`);
          newDoc.document.writeln(`Contact : ${this.form.contact.value} <br><br>`);
          newDoc.document.writeln(`Remark : ${this.form.remark.value} <br><br>`);
          newDoc.document.writeln(`Sex : ${this.form.sex.value} <br><br>`);
          newDoc.document.writeln(`Courses : ${this.coursesList} <br><br>`);
          newDoc.document.writeln(`Location : ${this.form.location.value} <br><br>`);

          this.coursesList="";
     }
     checkCourse(){
          for(let c of this.form.courses){
               if(c.checked){
                    this.coursesList += c.value + " , ";
               }
          }
     }
}