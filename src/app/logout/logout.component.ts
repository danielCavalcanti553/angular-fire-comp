import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {


  constructor(private router : Router, private auth: AngularFireAuth){}
    

  ngOnInit(): void {
    this.logout();
    
  }

  async logout(){
    this.auth.signOut().then(data=>{
      this.router.navigate(['/login']);
    });
    
  }
}
