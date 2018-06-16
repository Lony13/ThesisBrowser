import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Thesis } from './thesis';
// import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ThesisService {

  private thesesUrl = 'api/theses';
  private authorUrl = 'http://localhost:8080/api/theses/author';
  private titleUrl = 'http://localhost:8080/api/theses/title';

  constructor(
    private http: HttpClient) { }

  /** GET theses from the server */
  getTheses (): Observable<Thesis[]> {
    return this.http.get<Thesis[]>('http://localhost:8080/api/theses')
      .pipe(
        catchError(this.handleError('getTheses', []))
      );
  }

  getThesesByAuthor (author: string): Observable<Thesis[]> {
    const url = `${this.authorUrl}/?author=${author}`;
    return this.http.get<Thesis[]>(url)
      .pipe(
        catchError(this.handleError('getTheses', []))
      );
  }

  getThesesByTitle (title: string): Observable<Thesis[]> {
    const url = `${this.titleUrl}/?title=${title}`;
    return this.http.get<Thesis[]>(url)
      .pipe(
        catchError(this.handleError('getTheses', []))
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

  /** GET thesis by id. Will 404 if id not found */
  getThesis(id: number): Observable<Thesis> {
    const url = `${this.thesesUrl}/${id}`;
    return this.http.get<Thesis>(url).pipe(
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

  //////// Save methods //////////

  // /** POST: add a new thesis to the server */
  // addThesis (thesis: Thesis): Observable<Thesis> {
  //   return this.http.post<Thesis>(this.thesesUrl, thesis, httpOptions).pipe(
  //     catchError(this.handleError<Thesis>('addThesis'))
  //   );
  // }
  //
  // /** DELETE: delete the thesis from the server */
  // deleteThesis (thesis: Thesis | number): Observable<Thesis> {
  //   const id = typeof thesis === 'number' ? thesis : thesis.id;
  //   const url = `${this.thesesUrl}/${id}`;
  //
  //   return this.http.delete<Thesis>(url, httpOptions).pipe(
  //     catchError(this.handleError<Thesis>('deleteThesis'))
  //   );
  // }
  //
  // /** PUT: update the thesis on the server */
  // updateThesis(thesis: Thesis): Observable<any> {
  //   return this.http.put(this.thesesUrl, thesis, httpOptions).pipe(
  //     catchError(this.handleError<any>('updateThesis'))
  //   );
  // }

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