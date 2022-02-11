import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PrimeModule } from '@shared/modules/prime.module';
import { HeaderComponent } from '@shared/components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    PrimeModule,
  ],

  exports: [
    HeaderComponent,
    FooterComponent
  ],
})
export class SharedCommonModule {}
