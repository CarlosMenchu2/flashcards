import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgScrollbarModule } from "ngx-scrollbar";
import { QuillModule } from 'ngx-quill';
//Componentes
import { LayoutComponent } from './components/layout/layout.component';

//Material
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CategoriesComponent } from './components/category/categories/categories.component';
import { CardcategoryComponent } from './components/category/cardcategory/cardcategory.component';
import { NewcategoryComponent } from './components/category/newcategory/newcategory.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import { QuestionComponent } from './components/question/question/question.component';
import { QuestionCardComponent } from './components/question/question-card/question-card.component';
import { NewQuestionComponent } from './components/question/new-question/new-question.component';
import { RegisterComponent } from './components/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    NavigationComponent,
    CategoriesComponent,
    CardcategoryComponent,
    NewcategoryComponent,
    QuestionComponent,
    QuestionCardComponent,
    NewQuestionComponent,
    RegisterComponent,
  ],
  imports: [
    QuillModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    FlexLayoutModule,
    LayoutModule,
    MatDialogModule,
    MatPaginatorModule,
    NgScrollbarModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[RegisterComponent]
})
export class AppModule { }
