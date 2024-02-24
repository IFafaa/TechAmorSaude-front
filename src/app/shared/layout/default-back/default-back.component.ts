import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'default-back',
  templateUrl: './default-back.component.html',
  styleUrls: ['./default-back.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
})
export class DefaultBackComponent {
  constructor(private readonly location: Location) {}

  back() {
    this.location.back();
  }
}
