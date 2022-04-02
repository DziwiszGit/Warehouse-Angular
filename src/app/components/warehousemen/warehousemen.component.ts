import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {Warehouseman} from "../../models/warehouseman.model";
import {Position} from "../../models/position.model";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {WarehousemanService} from "../../services/warehouseman/warehouseman.service";

@Component({
  selector: 'app-warehousemen',
  templateUrl: './warehousemen.component.html',
  styleUrls: ['./warehousemen.component.css']
})
export class WarehousemenComponent implements OnInit {
  myControl = new FormControl();
  warehousemanList: Warehouseman[] = [];

  filteredOptions: Observable<Warehouseman[]> | undefined;
  displayedColumns: string[] = ['id', 'name', 'surname', 'age','position'];
  warehousemanChosen: Warehouseman | undefined;

  constructor(private service:WarehousemanService) {}


  ngOnInit() {
    this.service.getWarehouseman().subscribe(res=>{
      this.warehousemanList=res;
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  selected($event: string): void {
    const idFromEvent = Number($event);
    this.warehousemanChosen = this.warehousemanList.find(value => value.id == idFromEvent);
  }

  getchosen(){
    return this.warehousemanChosen?.id;
  }


  private _filter(value: string): Warehouseman[] {
    const filterValue = value.toLowerCase();
    return this.warehousemanList.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
