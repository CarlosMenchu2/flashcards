import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./components/login/login.component";
import { NavigationComponent } from "./components/shared/navigation/navigation.component";
import { CategoriesComponent } from "./components/category/categories/categories.component";
import { QuestionComponent } from "./components/question/question/question.component";

const routes: Routes = [
  { path: '',   redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent  },
  { path: 'main', component: NavigationComponent,
    children: [
      { path: 'categories', component: CategoriesComponent},
      { path: 'questions/:idcategory', component: QuestionComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
