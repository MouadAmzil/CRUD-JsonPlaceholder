import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post/post.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private postS: PostService,
    private route: ActivatedRoute,
    private _location: Location
  ) {}
  postSelected: any | undefined = { userId: 0, id: 0, title: '', body: '' };
  Comment: any | undefined;
  ngOnInit(): void {
    this.GetPost();
  }
  GetPost() {
    this.postS
      .GetPostById(String(this.route.snapshot.paramMap.get('id')))
      .subscribe({
        next: (res) => {
          this.postSelected = res;
          this.GetComment(this.postSelected.id);
        },
        error: (err) => console.log(err),
      });
  }
  GetComment(id) {
    this.postS.GetCommentID(id).subscribe({
      next: (res) => (this.Comment = res),
      error: (err) => console.log(err),
    });
  }
  GoBack() {
    this._location.back();
  }
}
