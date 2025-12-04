class OnLi{
     courseList="";
     constructor(formName){
          this.form =document.querySelector(formName);
          this.form.addEventListener("submit",(e)=>this.handleSubmit(e));
     }
     handleSubmit(event){
          event.preventDefault();
          this.checkCourse();


          let newWind = window.open("","","height=600, width=450");
          newWind.document.writeln("<h3> Form Data </h3>");
          newWind . document.writeln(`Name :  ${this.form.name.value} <br> <br>`);
          newWind . document.writeln(`Contact :  ${this.form.contact.value} <br> <br>`);
          newWind . document.writeln(`Remark :  ${this.form.remark.value} <br> <br>`);
          newWind . document.writeln(`Sex :  ${this.form.sex.value} <br> <br>`);
          newWind . document.writeln(`Courses :  ${this.courseList} <br> <br>`);
          newWind . document.writeln(`Location :  ${this.form.location.value} <br> <br>`);

          this.courseList="";

          
     }


     checkCourse(){
          for(let c of this.form.courses){
               if(c.checked){
                    this.courseList += c.value + " , ";
               }
          }
     }
}