import { Injectable } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
import { NewTaskComponent } from 'src/app/components/new-task/new-task.component';
import { newTaskModel } from './new-task.model';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  taskOpject : newTaskModel = new newTaskModel();

  public newtaskformdata !: FormGroup ;
  public newtaskdata !: NewTaskComponent;
  

  constructor( public formbuilder: FormBuilder ,private Api: ApiService ,private router: Router ) { }

  
  

  creatForm(){
    this.formbuilder.group({
      title: [''],
      task : ['']
    });
  }

  post() {

    this.taskOpject.title=this.newtaskformdata.value.title;
    this.taskOpject.task=this.newtaskformdata.value.task;
    this.Api.postTask(this.taskOpject).subscribe(res=>{
      console.log(res);
      this.newtaskformdata.reset();
      this.router.navigate(['']);
      alert("Added successfully");
    },err=>{
      alert("something wrong");
    })
    
  }
}






