import {Component, OnInit} from '@angular/core';
import {RestApiService} from "../../services/rest-api.service";

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent implements OnInit {

  constructor(private restApi: RestApiService) {
  }

  public flowers : Object[] = [];

  ngOnInit(): void {
    this.restApi.getCatalog().subscribe({
      next: value => this.flowers.push(value),
      error: err => console.log(err)
    }
    )
  }


}
