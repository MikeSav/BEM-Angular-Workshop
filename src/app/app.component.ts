import { Component } from '@angular/core';

@Component({
  selector: 'msa-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public closeContent = true;

    public toggleMenu() {
      this.closeContent = !this.closeContent;
    }
}
