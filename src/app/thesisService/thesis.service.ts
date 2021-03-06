import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import {Thesis} from '../model/thesis';
import {ThesisDetails} from '../model/thesisDetails';
import {ThesisFilters} from '../model/thesisFilters';
import {AppSettings} from '../app.settings';

@Injectable({providedIn: 'root'})
export class ThesisService {

  public id: number;

  private thesesUrl = '/api/theses';
  private detailsUrl = '/api/theses/details/';
  private searchUrl = '/api/theses/search';
  private updateQuotationsUrl = '/thesis/quotation/updates';
  private relatedThesesUrl = '/api/theses/similar';


  public theses: ThesisDetails[];

  constructor(private http: HttpClient) {
  }

  getTheses(): Observable<ThesisDetails[]> {
    return this.http.get<ThesisDetails[]>(AppSettings.API_ENDPOINT + this.thesesUrl)
      .pipe(
        catchError(this.handleError('getTheses', []))
      );
  }

  getThesisDetailsById(id: number): Observable<ThesisDetails> {
    const url = AppSettings.API_ENDPOINT + this.detailsUrl + `${id}`;
    return this.http.get<ThesisDetails>(url).pipe(
      catchError(this.handleError<ThesisDetails>(`getThesis id=${id}`))
    );
  }

  getThesesWithFilters(filters: ThesisFilters): Observable<ThesisDetails[]> {
    const url = AppSettings.API_ENDPOINT + `${this.searchUrl}`;
    return this.http.post<ThesisDetails[]>(url, filters)
      .pipe(
        catchError(this.handleError('getThesesWithFilters', []))
      );
  }

  getRelatedTheses(thesisFilters: ThesisFilters): Observable<ThesisDetails[]> {
    const url = AppSettings.API_ENDPOINT + this.relatedThesesUrl;
    return this.http.post<ThesisDetails[]>(url, thesisFilters)
      .pipe(
        catchError(this.handleError('getRelatedTheses', []))
      );
  }

  updateQuotations(id: number) {
    let url = AppSettings.API_ENDPOINT + this.updateQuotationsUrl;
    url = `${url}/?thesisId=${id}`;
    return this.http.get<number>(url).pipe(
      catchError(this.handleError<number>(`updateQuotations id=${id}`))
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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
