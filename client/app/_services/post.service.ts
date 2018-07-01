import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../app.config';
import { Post } from '../_models/index';

@Injectable()
export class PostService {
    constructor(private http: HttpClient) { }

    // create(post: Post) {
    //     return this.http.post(appConfig.apiUrl + '/users/register', post); //should be edited
    // }

    // getById(_id: string) {
    //     return this.http.get(appConfig.apiUrl + '/users/' + _id);
    // }

    // create(user: User) {
    //     return this.http.post(appConfig.apiUrl + '/users/register', user);
    // }

    // update(user: User) {
    //     return this.http.put(appConfig.apiUrl + '/users/' + user._id, user);
    // }

    // delete(_id: string) {
    //     return this.http.delete(appConfig.apiUrl + '/users/' + _id);
    }