import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'default-search-input',
  templateUrl: './default-search-input.component.html',
  styleUrls: ['./default-search-input.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class DefaultSearchInputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Output() searchEvent = new EventEmitter<string>();
  searchSubject$ = new Subject();
  @Input() text = '';

  ngOnInit(): void {
    this.searchSubject$.pipe(debounceTime(750)).subscribe((value) => {
      this.searchEvent.emit(value as string);
    });
  }
}
