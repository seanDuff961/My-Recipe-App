import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']  // Use 'styleUrls' instead of 'styleUrl',
})

export class HeaderComponent {
  collapsed = true;
}
