import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Thesis } from './thesis';
import {AppModule} from '../app/app.module';
import {ThesisDetails} from './thesisDetails';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ThesisService {

  public thesisId: number;

  private roleDemo = '?role=ROLE_DEMO';
  private thesesUrl = '/api/theses';
  private detailsUrl = '/api/theses/details/';
  private searchUrl = '/api/theses/search';

  constructor(private http: HttpClient) { }

  setThesisId(id: number) {
    this.thesisId = id;
  }

  getTheses (): Observable<Thesis[]> {
    return this.http.get<Thesis[]>(AppModule.API_ENDPOINT + this.thesesUrl + this.roleDemo)
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

  getThesesWithFilters (author: string): Observable<Thesis[]> {
    const url = `${this.searchUrl}`;
    return this.http.get<Thesis[]>(url)
      .pipe(
        catchError(this.handleError('getThesesWithFilters', []))
      );
  }

  /** GET thesis by id. Return `undefined` when id not found */
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

  /* GET theses whose name contains search term */
  searchTheses(term: string): Observable<Thesis[]> {
    if (!term.trim()) {
      // if not search term, return empty thesis array.
      return of([]);
    }
    return this.http.get<Thesis[]>(`${this.thesesUrl}/?name=${term}`).pipe(
      catchError(this.handleError<Thesis[]>('searchTheses', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
