import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = 'http://localhost:8080/product';
const urlCate = 'http://localhost:8080/category';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<any>(url);
  }
  getAllMan(): Observable<any> {
    return this.http.get<any>(`${url}/?category_id=2`);
  }
  getAllWoman(): Observable<any> {
    return this.http.get<any>(`${url}/?category_id=1`);
  }
  getAllphukien1(): Observable<any> {
    return this.http.get<any>(`${url}/?category_id=3`);
  }
  getAllphukien2(): Observable<any> {
    return this.http.get<any>(`${url}/?category_id=4`);
  }
  getCate(): Observable<any> {
    return this.http.get<any>(`${urlCate}`);
  }
  filter_pro(id: any): Observable<any> {
    return this.http.get<any>(`${url}/?category_id=${id}`);
  }
  detail(id: number): Observable<any> {
    return this.http.get<any>(`${url}/${id}`);
  }
}
