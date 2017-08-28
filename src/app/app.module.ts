import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TablesService} from './service/tables-service';
import {TypesService} from './service/types-service';
import {ColumnsService} from './service/columns-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TablesService, TypesService, ColumnsService],
  bootstrap: [AppComponent]
})
export class AppModule {}

