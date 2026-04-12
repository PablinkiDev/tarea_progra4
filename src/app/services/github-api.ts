import { HttpClient } from '@angular/common/http';
import { inject, Injectable, InputSignal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GithubApi {
  private api_url = 'https://api.github.com/users/'
  private http = inject(HttpClient)

  getUser(user: string, signal: WritableSignal<any | null>) {
    const req = this.http.get(this.api_url + user);

    const sub = req.subscribe((res) => {
      if (res && signal) signal.set(res); 

      sub.unsubscribe()
    });
  }

  getRepos(user: string, signal: WritableSignal<any | null>) {
    const req = this.http.get(`${this.api_url + user}/repos`);

    const sub = req.subscribe((res) => {
      if (res && signal) signal.set(res);

      sub.unsubscribe();
    })
  }
}
