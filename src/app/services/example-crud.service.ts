import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './../models/post'


@Injectable({
  providedIn: 'root'
})
export class ExampleCrudService {

  url: string; 
  constructor(private httpClient:HttpClient) { 
    this.url = "https://jsonplaceholder.typicode.com";
  }

  getAllPost() { 
    let endPoints = "/posts/";
    return this.httpClient.get<any>(this.url + endPoints)
  }

  getPostById(postId: number) { 
    let endPoints = "/posts/" + postId;
    return this.httpClient.get<Post>(this.url + endPoints)
  }

  addPost(postData: Object) {
    let endPoints = "/posts"
    return this.httpClient.post<Post>(this.url + endPoints, postData) 
  }

  updatePost(postData: Object) {
    let endPoints = "/posts/1"
    return this.httpClient.put<Post>(this.url + endPoints, postData)  
  }

  deletePost(idPost: number) {
    let endPoints = "/posts/" + idPost
    return this.httpClient.delete<Post>(this.url + endPoints)  
  } 
}
