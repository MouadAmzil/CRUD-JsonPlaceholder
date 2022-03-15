import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
})
export class DashbordComponent implements OnInit {
  constructor(private postS: PostService) {}
  postes: any;
  ngOnInit(): void {
    this.GetAllPosts();
  }
  GetAllPosts() {
    this.postS.GetPostPosts().subscribe({
      next: (res) => (this.postes = res),
    });
  }  
}
