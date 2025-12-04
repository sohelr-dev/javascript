class Online{
     courseList="";
     constructor(forName){
          this.form =document.querySelector(forName);
          this.form.addEventListener("submit",(e)=>this.handleSubmit(e));
     }
     handleSubmit(event){
          event.preventDefault();

          this.checkCourse();


          let newWind =window.open("","","height=600, width=500px");
          newWind.document.writeln(`Name :  ${this.form.name.value} <br>`);
          newWind.document.writeln(`Contact :  ${this.form.contact.value} <br>`);
          newWind.document.writeln(`Remark :  ${this.form.remark.value} <br>`);
          newWind.document.writeln(`SEX :  ${this.form.sex.value} <br>`);
          newWind.document.writeln(`Courses :  ${this.courseList} <br>`);
          newWind.document.writeln(`Location :  ${this.form.location.value} <br>`)

          this.courseList="";
     }
     checkCourse(){
          for(let c of this.form.courses){
               if(c.checked){
                    this.courseList +=c.value + " , ";
               }
          }
     }
}