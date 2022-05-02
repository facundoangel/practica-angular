import { Component, OnInit } from '@angular/core';
import {Servicio} from "../../services/data.service"


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  
  datajson:any;

  constructor(private Serv: Servicio) { }

  ngOnInit(): void {

    this.loadResults();

  }

  async loadResults (){
    let result = await this.Serv.get();
    result.subscribe(res => {
      console.log(res)
      this.datajson=res;
    })
  }

}
