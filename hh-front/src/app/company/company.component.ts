import { Component, OnInit } from '@angular/core';

import { VacancyService } from '../vacancy.service'
import { Company } from '../Company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies: Company[] = [];

  constructor(private service: VacancyService) { }

  ngOnInit(): void {
    this.service.getCompaines().subscribe(c => this.companies = c);
  }

}
