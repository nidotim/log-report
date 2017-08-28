import {Component, OnInit} from '@angular/core';

import {TablesService} from './service/tables-service';
import {TypesService} from './service/types-service';
import {ColumnsService} from './service/columns-service';
import {Tables} from './model/tables';
import {Types} from './model/types';
import {Columns} from './model/columns';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  tables: Tables[];
  types: Types[];
  typesInTable: Types[];
  tablesMap: Map<string, Tables>;
  typesMap: Map<string, Types>;
  selectedTable: Tables;
  selectedType: Types;
  columns: Columns[];
  sql: string;

  constructor(
    private tablesService: TablesService,
    private typesService: TypesService,
    private columnsService: ColumnsService) {}

  ngOnInit(): void {
    this.tablesService.getTables()
      .then(tables => {
        this.tables = tables;
        this.tablesMap = new Map<string, Tables>(
          this.tables.map(table => [table.tableName, table] as [string, Tables])
        );
        this.selectedTable = tables[0];
        this.getColumns(this.selectedTable.tableName);
      })
      .then(() => this.typesService.getTypes()
        .then(types => {
          this.types = types;
          this.typesMap = new Map<string, Types>(
            this.types.map(type => [type.name, type] as [string, Types])
          );
          this.selectedType = this.types[0];
          this.sql = this.getSql(this.selectedType.sql);
        }))
      .then(tables => this.assignTypes(this.tables[0]))
      .catch(this.handleErr);
  }

  setNewTable(selectedTable): void {
    this.assignTypes(this.tablesMap.get(selectedTable));
  }

  setNewType(selectedType): void {
    this.selectedType = this.typesMap.get(selectedType);
    this.sql = this.getSql(this.selectedType.sql);
  }

  assignTypes(table: Tables): void {
    this.typesInTable = [];
    const tblName: string = table.tableName;
    for (const typeName of table.types) {
      const typeObj = this.typesMap.get(typeName);
      this.typesInTable.push(typeObj);
    }
  }

  getColumns(tableName: string): void {
    // console.log(this.columnsService.getColumns('123'));
    this.columns = this.columnsService.getColumns('123');
  }

  getSql(sql: string): string {
    const now = new Date();
    return sql.replace('$fromDate', this.toYesterdayMidnight(now)).replace("$toDate", this.toTodayMidnight(now));
  }


  toTodayMidnight(date: Date): string {
    const yyyy = date.getFullYear() + '';
    const mm = date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1) + '';  // getMonth() is zero-based
    const dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() + '';
    return ''.concat(yyyy).concat('-').concat(mm).concat('-').concat(dd).concat(' ').concat('00:00:00');
  }

  toYesterdayMidnight(date: Date): string {
    const yesterday = new Date(date);
    yesterday.setDate(yesterday.getDate() - 1);
    const yyyy = yesterday.getFullYear() + '';
    const mm = yesterday.getMonth() < 10 ? '0' + (yesterday.getMonth() + 1) : (yesterday.getMonth() + 1) + ''; // getMonth() is zero-based
    const dd = yesterday.getDate() < 10 ? '0' + yesterday.getDate() : yesterday.getDate() + '';
    return ''.concat(yyyy).concat('-').concat(mm).concat('-').concat(dd).concat(' ').concat('00:00:00');
  }

  genSql(): void {

  }

  handleErr(): void {
    console.error(this);
  }
}

