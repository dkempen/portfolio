import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IpService {
  constructor(private client: HttpClient) {}

  public async getIp(): Promise<string> {
    return firstValueFrom(
      this.client
        .get<{ ip: string }>('https://ipapi.co/json')
        .pipe(map((x) => x.ip))
    );
  }
}
