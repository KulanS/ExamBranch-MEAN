import { Component, Input, Output, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, PostService } from '../_services/index';
import { Title } from '@angular/platform-browser';
import { User } from '../_models/index';
import { UserService } from '../_services/index';


@Component({
    moduleId: module.id,
    selector: 'postregister',
    templateUrl: './post_register.component.html'
})


export class PostRegisterComponent{
    currentUser: User;
    showSubjectList: boolean;
    year: number;
    showFirstAttempt: string;
    showRepeatAttempt: string;
    viewFirstAttempt: boolean;
    viewRepeatAttempt: boolean;
    noFirstAttempt: number = 0;
    noRepeatAttempt: number = 0;
    showM = 0;
    selectedFirstAttempt:string[] = [];
    selectedRepeatAttempt: string[] = [];
    subjects1stYear = ["SCS1001","SCS1002","SCS1003",];
    subjects2ndYear = ["SCS2001","SCS2002","SCS2003",];

    
    constructor(private userService: UserService){
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.currentUser.email);
        this.viewFirstAttempt = true;
        this.viewRepeatAttempt = true;
        
    }

    checkboxCheck(event: any, year: number){
        
        this.showSubjectList = true;
        if(event.isTrusted && year==1){
           this.year = year;
           console.log(event);
        }else{
            this.year = year;
            console.log(event);
        }
    }

    loadSubjects(){
        if(this.year==1){
            return this.subjects1stYear;
        }else{
            return this.subjects2ndYear;
        }
    }

    selectFirstAttemptSubject(event:any, subject:string){
        console.log(event.target.checked);
            if(event.target.checked){
                this.selectedFirstAttempt.push(subject);
                this.showM++; 
            }else{
                this.selectedFirstAttempt.splice(this.selectedFirstAttempt.indexOf(subject), 1);
                this.showM--;
            }
            console.log(this.selectedFirstAttempt.length);
            this.noFirstAttempt = this.selectedFirstAttempt.length;
    }

    selectRepeatAttemptSubject(event:any, subject:string){
          if(event.target.checked){
              this.selectedRepeatAttempt.push(subject);
              this.showM++;
          }else{
              this.selectedRepeatAttempt.splice(this.selectedRepeatAttempt.indexOf(subject), 1);
              this.showM--;
            }
            console.log(this.selectedRepeatAttempt.length);
            this.noRepeatAttempt = this.selectedRepeatAttempt.length;
    }

    toggleFirstAttempt(){
    
        this.showFirstAttempt = "active";
        this.showRepeatAttempt = null;
        this.viewFirstAttempt = false;
        this.viewRepeatAttempt = true;
        
    }

    toggleRepeatAttempt(){
    
        this.showFirstAttempt = null;
        this.showRepeatAttempt = "active";
        this.viewFirstAttempt = true;
        this.viewRepeatAttempt = false;
    }
    
    showModal(){
        if(this.noFirstAttempt==0 || this.noRepeatAttempt==0){
            //this.showM = ".bs-example-modal-sm";
        }else{
            //this.showM = "#myModal";
        }
        console.log(this.showM);
    }
}