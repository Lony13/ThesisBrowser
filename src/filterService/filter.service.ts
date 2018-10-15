import {Component, Injectable, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({ providedIn: 'root' })
export class FilterService {

  constructor(private http: HttpClient) { }
}
