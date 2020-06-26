import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { MovieCreateComponent } from './components/movie/movie-create/movie-create.component';
import { MovieUpdateComponent } from './components/movie/movie-update/movie-update.component';
import { MovieDeleteComponent } from './components/movie/movie-delete/movie-delete.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "filmes",
    component: ProductCrudComponent
  },
  {
    path: "filmes/create",
    component: MovieCreateComponent
  },
  {
    path: "filmes/update/:id",
    component: MovieUpdateComponent
  },
  {
    path: "filmes/delete/:id",
    component: MovieDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
