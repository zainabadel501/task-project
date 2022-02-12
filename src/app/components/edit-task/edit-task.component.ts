import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Router } from '@angular/router';
import { NewTaskComponent } from 'src/app/components/new-task/new-task.component';

//  import { newTaskModel } from '../../shared/new-task.model';
@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
   
  taskData !:any;
   newtaskfun !:  NewTaskComponent;
  // newtaskfun !:  NewTaskComponent;
  // edittaskOpject : newTaskModel = new newTaskModel();
  
  constructor( private Api : ApiService , private router: Router  ) { }

  ngOnInit(): void {
  this.getAlltask();
  }

  getAlltask(){
    this.Api.getTask().subscribe(res=>{
      this.taskData=res;
    })
  }

  deleteTask(row: any){
    this.Api.deleteTask(row.id).subscribe(res=>{
      alert("task deleted");
      this.getAlltask();
    });

  }

  onEdit(row : any){
    // this.newtaskfun.newtaskform.controls['title'].setValue(row.title);
    // this.newtaskfun.newtaskform.controls['task'].setValue(row.task);
  }



}
