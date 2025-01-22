import { CommonModule } from '@angular/common';
import { Component,Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagination',
  imports: [CommonModule,FormsModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() totalPages: number = 1; // Total number of pages
  @Input() currentPage: number = 1; // Current active page

  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  get pages(): number[] {
    // Show a few pages around the current one, with '...' for the rest
    const range = [];
    for (let i = 1; i <= this.totalPages; i++) {
      if (i === 1 || i === this.totalPages || Math.abs(this.currentPage - i) <= 1) {
        range.push(i);
      }
    }
    return range;
  }

  get showDots(): boolean {
    return this.totalPages > 5 && this.currentPage < this.totalPages - 2;
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.pageChanged.emit(this.currentPage);
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChanged.emit(this.currentPage);
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChanged.emit(this.currentPage);
    }
  }
}
