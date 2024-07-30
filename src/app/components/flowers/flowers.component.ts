import {Component, OnInit} from '@angular/core';
import {RestApiService} from "../../services/rest-api.service";
import {Product} from "../../utils/product";

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent implements OnInit {

  constructor(private restApi: RestApiService) {
  }

  public flowers : Product[] = [];



  ngOnInit(): void {
    this.restApi.getCatalog().subscribe({
      next: value => this.flowers.push(value),
      error: err => console.log(err)
    }
    )
  }


}
