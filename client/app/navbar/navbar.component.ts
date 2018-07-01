import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: './navbar.component.html'
})

export class NavbarComponent {
    currentUser: User;
    @Output() makeVisible = new EventEmitter<any>();
    constructor(private userService: UserService){
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    makeNewLeaveVisible(){
        this.makeVisible.emit({
            prVisible: false,
            mlVisible: true
        });
    }

    makeMyLeavesVisible(){
        this.makeVisible.emit({
            prVisible: true,
            mlVisible: false
        });
    }
    
}


