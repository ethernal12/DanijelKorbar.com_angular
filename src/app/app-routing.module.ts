import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BiographyComponent } from './pages/biography/biography.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GithubRespositoriesComponent } from './pages/github-respositories/github-respositories.component';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'about',component: AboutComponent, data: { animation: 'routeAnimations' } },
  {path: 'biography',component: BiographyComponent, data: { animation: 'routeAnimations' } },
  {path: 'contact',component: ContactComponent, data: { animation: 'routeAnimations' } },
  {path: 'gitHub',component: GithubRespositoriesComponent, data: { animation: 'routeAnimations' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
