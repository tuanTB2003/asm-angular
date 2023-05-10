import { Component } from '@angular/core';
import { User } from './common/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frameword_Angular';
  user : User = {
    name: 'Nguyễn Quốc Huy',
    age: 20,
    dress: "Nam Định"
  }
}
