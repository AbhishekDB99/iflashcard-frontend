import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  getAllFlashCards() {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6OTA5MDg4LCJpYXQiOjE3MTM4ODEzNjYsImV4cCI6MTcxMzk2Nzc2Nn0.S55nnabY4ZVkIQcC8BJXC313nbW7Dse2JPCPVEtUf1g';
    const headers = new HttpHeaders({ Authorization: `${token}` });

    return this.http.get('http://localhost:2099/flash_card/card_by_username', {
      headers,
    });
  }
}
