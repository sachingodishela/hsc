import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { StatementComponent } from './components/statement/statement.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { Statement } from '@angular/compiler';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { ResearchComponent } from './components/research/research.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { PolicyComponent } from './components/policy/policy.component';
import { DataComponent } from './components/data/data.component';
import { ModelComponent } from './components/model/model.component';

const appRoutes: Routes = [
  { path: '', component: StatementComponent },
  { path: 'aboutus', component: AboutusComponent},
  { path: 'model', component: ModelComponent },
  { path: 'data', component: DataComponent},
  { path: 'research', component: ResearchComponent},
  { path: 'challenge', component: ChallengesComponent},
  { path: 'policy', component: PolicyComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatementComponent,
    AboutusComponent,
    ResearchComponent,
    ChallengesComponent,
    PolicyComponent,
    DataComponent,
    ModelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
