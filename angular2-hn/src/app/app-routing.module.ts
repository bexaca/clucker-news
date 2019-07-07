import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemCommentsComponent } from './item-comments/item-comments.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'news/1', pathMatch: 'full' },
  {
    path: 'news/:page',
    component: MainComponent,
    data: { storiesType: 'news' }
  },
  {
    path: 'newest/:page',
    component: MainComponent,
    data: { storiesType: 'newest' }
  },
  {
    path: 'show/:page',
    component: MainComponent,
    data: { storiesType: 'show' }
  },
  {
    path: 'ask/:page',
    component: MainComponent,
    data: { storiesType: 'ask' }
  },
  {
    path: 'jobs/:page',
    component: MainComponent,
    data: { storiesType: 'jobs' }
  },
  { path: 'item/:id', component: ItemCommentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
