import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FormsModule} from '@angular/forms';
import { CodaliteDetailComponent } from './codalite-detail/codalite-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CodaliteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
