import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';

import { User } from '../_models/index';
import { UserService } from '../_services/index';



@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    showPR: boolean;
    showML: boolean;

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
        
    }

    ngOnInit() {
        this.loadAllUsers();
        
    }

    deleteUser(_id: string) {
        this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    getVisible(data: any){
        this.showPR = data.prVisible;
        this.showML = data.mlVisible;
    }
}