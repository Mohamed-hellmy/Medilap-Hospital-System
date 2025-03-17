import { Component } from '@angular/core';
import { faPhone ,faEnvelope ,faLocationArrow } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faphone = faPhone;
  telegraph=faEnvelope
  location=faLocationArrow
}
