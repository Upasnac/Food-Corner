import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(term: string): void {
    if (term) {
      this.router.navigateByUrl('/search/' + term);
    } else {
      // If search term is empty, navigate to a route where you display all items
      this.router.navigateByUrl('');
    }
  }
}
