import { Component ,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  status=false;
  toggle(){
    this.status =!this.status
  }


  @Output() logoutClicked = new EventEmitter<void>();

  logout() {
    this.logoutClicked.emit();
  }

}
