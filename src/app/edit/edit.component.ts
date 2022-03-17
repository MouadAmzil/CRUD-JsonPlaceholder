import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  postSelected: any | undefined = {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  };
  post: FormGroup;
  constructor(
    private _PostSV: PostService,
    private _route: ActivatedRoute,
    private _location: Location,
    private _fb: FormBuilder,
    private _PostService: PostService
  ) {}
  ngOnInit(): void {
    this.setForm();
    this.GetPost();
  }
  GetPost() {
    this._PostSV
      .GetPostById(String(this._route.snapshot.paramMap.get('id')))
      .subscribe({
        next: (res) => {
          this.postSelected = res;
          this.setForm();
        },
        error: (err) => console.log(err),
      });
  }
  deletePost() {
    this._PostService.DeletePost(this.post['id']).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
  }
  updatePost() {
    this._PostService.UpdatePost('').subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
  }
  GoBack() {
    this._location.back();
  }
  setForm() {
    this.post = this._fb.group({
      title: [this.postSelected['title'], [Validators.required]],
      body: [this.postSelected['body'], [Validators.required]],
    });
  }
}
