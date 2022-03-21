import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {
  miniopenclose:boolean = false;
  selectedMenu:any='Home';

  constructor() { }

  ngOnInit(): void {
  }
  goTo(pText:string){
    this.selectedMenu = pText
  }
  mini(){
    this.miniopenclose = !this.miniopenclose;
  }
}
