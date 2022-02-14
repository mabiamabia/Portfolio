import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PrimeModule } from '@shared/modules/prime.module';
import { HeaderComponent } from '@shared/components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AboutMeComponent } from '@app/profile/topics/about-me/about-me.component';
import { CertificationsComponent } from '@app/profile/topics/certifications/certifications.component';
import { ExperiencesComponent } from '@app/profile/topics/experiences/experiences.component';
import { FormationsComponent } from '@app/profile/topics/formations/formations.component';
import { SkillsComponent } from '@app/profile/topics/skills/skills.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutMeComponent,
    ExperiencesComponent,
    CertificationsComponent,
    FormationsComponent,
    SkillsComponent
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
    FooterComponent,
    AboutMeComponent,
    ExperiencesComponent,
    CertificationsComponent,
    FormationsComponent,
    SkillsComponent
  ],
})
export class SharedCommonModule {}
