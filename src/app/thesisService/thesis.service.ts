import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Thesis } from '../model/thesis';
import {AppModule} from '../app.module';
import {ThesisDetails} from '../model/thesisDetails';
import {ThesisFilters} from '../model/thesisFilters';

@Injectable({ providedIn: 'root' })
export class ThesisService {

  public thesisId: number;

  private roleDemo = '?role=ROLE_DEMO';
  private thesesUrl = '/api/theses';
  private detailsUrl = '/api/theses/details/';
  private searchUrl = '/api/theses/search';

  public theses: ThesisDetails[];

  constructor(private http: HttpClient) { }

  getTheses (): Observable<ThesisDetails[]> {
    return this.http.get<ThesisDetails[]>(AppModule.API_ENDPOINT + this.thesesUrl + this.roleDemo)
      .pipe(
        catchError(this.handleError('getTheses', []))
      );
  }

  getThesisDetailsById(id: number): Observable<ThesisDetails> {
    const url = AppModule.API_ENDPOINT  + this.detailsUrl + `${id}` + this.roleDemo;
    return this.http.get<ThesisDetails>(url).pipe(
      catchError(this.handleError<ThesisDetails>(`getThesis id=${id}`))
    );
  }

  getThesesWithFilters (filters: ThesisFilters): Observable<ThesisDetails[]> {
    const url = AppModule.API_ENDPOINT + `${this.searchUrl}`;
    return this.http.post<ThesisDetails[]>(url, filters)
      .pipe(
        catchError(this.handleError('getThesesWithFilters', []))
      );
  }

  getThesisoNo404<Data>(id: number): Observable<Thesis> {
    const url = `${this.thesesUrl}/?id=${id}`;
    return this.http.get<Thesis[]>(url)
      .pipe(
        map(theses => theses[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
        }),
        catchError(this.handleError<Thesis>(`getThesis id=${id}`))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
