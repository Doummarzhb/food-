import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  taskArray = [{ taskName: 'Doummar Z', isCompleted: false , isEditTable:false }];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);

    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false,
      isEditTable:false
    })

    form.reset();
  }

  onDelete(index: number) {
    console.log(index);

    this.taskArray.splice(index, 1);
  }
  onEdit(index:number){
  //  console.log(index);
  //  this.taskArray.splice(index,1);
  this.taskArray[index].isEditTable=true;
  }
  onSave(index:number,newtask:string){
    //  console.log(index);
    //  this.taskArray.splice(index,1);
    this.taskArray[index].taskName = newtask;
    this.taskArray[index].isEditTable =false;
  }
  onCheck(index: number) {
    console.log(this.taskArray);

    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

}
