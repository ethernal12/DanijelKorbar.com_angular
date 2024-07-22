import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppToolbarComponent } from './shared-components/app-toolbar/app-toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar'; import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from './pages/about/about.component';
import { BiographyComponent } from './pages/biography/biography.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AppLayoutComponent } from './shared-components/app-layout/app-layout.component';
import { AppFooterComponent } from './shared-components/app-footer/app-footer.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { GithubRespositoriesComponent } from './pages/github-respositories/github-respositories.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; // Import FormsModule
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { UppercasePipe } from './ui/pipes/uppercase.pipe';
import {ContactModule} from "./pages/contact/contact.module";
import { ButtonToolbarComponent } from './ui/parts/buttons/button-toolbar.component';
import {MatSelectModule} from "@angular/material/select";
import { MatExpansionModule } from "@angular/material/expansion";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppToolbarComponent,
    AboutComponent,
    BiographyComponent,
    AppLayoutComponent,
    AppFooterComponent,
    HeaderComponent,
    GithubRespositoriesComponent,
    ButtonToolbarComponent,
    UppercasePipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        HttpClientModule,
        FormsModule,
        MatCardModule,
        MatInputModule,
        ReactiveFormsModule,
        ContactModule,
        MatSelectModule,
        MatExpansionModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
