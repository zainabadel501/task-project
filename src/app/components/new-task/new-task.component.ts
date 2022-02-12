import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { ApiService } from 'src/app/shared/api.service';
import { newTaskModel } from '../../shared/new-task.model';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  
  public newtaskform !: FormGroup ;
  taskOpject : newTaskModel = new newTaskModel();
  // public newtaskform=this.newtaskdat.newtaskformdata ;

  //  newtaskform != FormGroup;
  
  //navigate from component to another 
  constructor( private formbuilder: FormBuilder , private http : HttpClient , private router: Router , private Api: ApiService , private newtaskdat : DataService) { }

  ngOnInit(): void {


    this.newtaskform =this.formbuilder.group({
      title: [''],
      task : ['']
    });

    

    

  
  }

  postTask(){
    this.newtaskdat.post();
  }

  //i dont get res=>
  post() {

    this.taskOpject.title=this.newtaskform.value.title;
    this.taskOpject.task=this.newtaskform.value.task;
    this.Api.postTask(this.taskOpject).subscribe(res=>{
      console.log(res);
      this.newtaskform.reset();
      this.router.navigate(['']);
      alert("Added successfully");
    },err=>{
      alert("something wrong");
    })
    
  }

  onEdit(row: any){
    this.newtaskform.controls['title'].setValue(row.title);
    this.newtaskform.controls['task'].setValue(row.task);

  }

}



