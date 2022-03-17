import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient) {
    const headers = new HttpHeaders();
  }
  baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  CommentByID = 'https://jsonplaceholder.typicode.com/comments?postId=';
  public MyRepos: any;
  GetPostPosts() {
    return this.httpClient.get(this.baseUrl);
  }
  GetPostById(id: string) {
    return this.httpClient.get(this.baseUrl + '/' + id);
  }
  GetCommentID(id: string) {
    return this.httpClient.get(this.CommentByID + id);
  }
  DeletePost(id) {
    return this.httpClient.delete(
      'https://jsonplaceholder.typicode.com/posts/' + id
    );
  }
  UpdatePost(id) {
    return this.httpClient.delete(
      'https://jsonplaceholder.typicode.com/posts/' + id
    );
  }
}
