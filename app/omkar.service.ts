import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OmkarService {

  constructor(private ob:HttpClient ) { }
  getBatches()
  {
    return this.ob.get("http://localhost:5555/batches");
  }
}
