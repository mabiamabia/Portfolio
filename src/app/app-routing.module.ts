import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppMainComponent } from './app.main.component';

/* import { PersonalComponent } from './profile/personal/personal.component';
import { AboutMeComponent } from './profile/topics/about-me/about-me.component';
import { ExperiencesComponent } from './profile/topics/experiences/experiences.component';
import { FormationsComponent } from './profile/topics/formations/formations.component';
import { SkillsComponent } from './profile/topics/skills/skills.component';
import { CoursesComponent } from './profile/topics/courses/courses.component';
 */
@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          component: AppMainComponent,
          children: [ ],
        },

        { path: '**', redirectTo: '' },
      ],
      { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
