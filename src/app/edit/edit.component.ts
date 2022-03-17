import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post/post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  postSelected: any | undefined = { userId: 0, id: 0, title: '', body: '' };
  constructor(
    private PostSV: PostService,
    private _route: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.GetPost();
  }
  GetPost() {
    this.PostSV.GetPostById(
      String(this._route.snapshot.paramMap.get('id'))
    ).subscribe({
      next: (res) => {
        this.postSelected = res;
        console.log(res);
      },
      error: (err) => console.log(err),
    });
  }
  GoBack() {
    this._location.back();
  }
}
