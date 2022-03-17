import { Component, OnInit } from '@angular/core';
import { LocalStorgeService } from 'src/app/services/local-storge.service';
import { PostService } from 'src/app/services/post/post.service';
import { Admin } from '../../common/admin.data';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
})
export class DashbordComponent implements OnInit {
  constructor(private postS: PostService, private local: LocalStorgeService) {
    this.GetAllPosts();
  }
  ISAdmin: boolean = false;
  postes: any;
  FilterListPostes: any;
  counter: number = 10;
  ngOnInit(): void {
    console.log(Admin.ThisUSerISAdmin);
    this.local.checkISAdmin();
    this.ISAdmin = Admin.ThisUSerISAdmin;
  }
  GetAllPosts() {
    this.postS.GetPostPosts().subscribe({
      next: (res) => {
        this.postes = res;
        this.FilterListPostes = this.postes.filter((obj) => obj.id < 10);
      },
    });
  }
  SelectCountList(event) {
    this.counter = event.target.value;
    this.FilterListPostes = this.postes.filter(
      (obj) => obj.id < event.target.value
    );
  }
}
