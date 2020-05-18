import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetQuestionsByTestidComponent } from './get-questions-by-testid/get-questions-by-testid.component';
import { QuestionServiceService } from './service/question-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddQuestionComponent } from './add-question/add-question.component';
import { DeleteQuestionComponent } from './delete-question/delete-question.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';

@NgModule({
  declarations: [
    AppComponent,
    GetQuestionsByTestidComponent,
    AddQuestionComponent,
    DeleteQuestionComponent,
    UpdateQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [QuestionServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
