import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = '127.0.0.1:5000/';
  
  constructor() { }
}