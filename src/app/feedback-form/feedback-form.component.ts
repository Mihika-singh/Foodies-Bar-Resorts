import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-feed-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feed-form.component.css'],

})
export class FeedbackFormComponent implements OnInit {

  constructor() { }
  model={
    username:"",
    text:"",
  }
  feedbackForm: any;
  onSubmit = false;
  minLen = false;
  headingAlign = "center"
  lessInfo=false;
  submit = false;
  lessLen=false;
  login(formval:any) {
    
    if(this.model.username==="" || this.model.text===""){
      this.lessInfo=true;
      this.onSubmit=false;
      this.lessLen=false;
      console.log(formval)
      console.log(this.model)
    }
    else if(this.model.username.length<3 || this.model.text.length<10){
this.lessLen=true;
this.onSubmit=false;
    }
    else{
      this.onSubmit=true;
      this.lessLen=false;
      this.lessInfo=false;
    }
   
    }
    



  

  ngOnInit(): void {
  }

  //
}
