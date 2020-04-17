import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Vacancy } from '../Vacancy';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {

  vacancies: Vacancy[] = [];

  constructor(private route: ActivatedRoute, private service: VacancyService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('companyID');
    this.service.companyVacancy(id).subscribe(v => this.vacancies = v);
  }
}
