import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeModule } from '@shared/modules/prime.module';
import { AppMainComponent } from './app.main.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ConfigService } from './config/services/app.config.service';
import { SharedCommonModule } from './shared/modules/shared-common.module';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { MenuService } from './config/services/app.menu.service';
import { AppConfigComponent } from './app.config.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    SharedCommonModule,
    BrowserAnimationsModule,
    PrimeModule,
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AppMainComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    AppConfigComponent
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },
    ConfigService, MenuService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
