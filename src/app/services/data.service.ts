import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class Servicio {

  constructor(private http: HttpClient) { }

  async get (){
     return this.http.get("http://localhost:3004/task")
  }

  async delete(){

    //return this.http.delete("http://localhost:3004/task")
  }
}
