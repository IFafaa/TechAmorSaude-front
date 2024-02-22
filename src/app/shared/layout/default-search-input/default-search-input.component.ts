import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'default-search-input',
  templateUrl: './default-search-input.component.html',
  styleUrls: ['./default-search-input.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class DefaultSearchInputComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  searchSubject$ = new Subject();
  text = '';

  ngOnInit(): void {
    this.searchSubject$.pipe(debounceTime(1000)).subscribe((value) => {
      this.searchEvent.emit(value as string);
    });
  }
}
