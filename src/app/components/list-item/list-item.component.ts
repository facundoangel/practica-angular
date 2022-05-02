import { Component, Input, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Servicio } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  faTimes = faTimes;
  @Input () title : any;
  @Input () description : any;
  @Input () reminder : any;
  @Input () id : any;

  constructor(private serv : Servicio) { }

  ngOnInit(): void {
    
  }

  onClick(e:any){
    let element = e.path;
    console.log(element[4].id)
  }

}
