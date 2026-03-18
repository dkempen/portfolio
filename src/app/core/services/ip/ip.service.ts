import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IpService {
  private http = inject(HttpClient);

  public async getIp(): Promise<string> {
    return firstValueFrom(
      this.http
        .get<{ ip: string }>('https://ipapi.co/json')
        .pipe(map((x) => x.ip)),
    );
  }
}
