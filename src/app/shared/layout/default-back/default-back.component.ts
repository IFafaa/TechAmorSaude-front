import { CommonModule, Location } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() clickCallback = new EventEmitter<void>();

  constructor(private readonly location: Location) {}

  back() {
    this.clickCallback.emit();
    this.location.back();
  }
}
