import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  getAllFlashCards() {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6OTA5MDg4LCJpYXQiOjE3MDk0NzI2MjUsImV4cCI6MTcwOTU1OTAyNX0.1DxiVW7OC3qquaBJeJ6yb4XDJ-zyI9SAZFQFyfiUo40';
    const headers = new HttpHeaders({ Authorization: `${token}` });

    return this.http.get('http://localhost:2099/flash_card/card_by_username', {
      headers,
    });
  }
}
