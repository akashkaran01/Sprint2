import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { DeleteQuestionComponent } from './delete-question/delete-question.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { GetQuestionsByTestidComponent } from './get-questions-by-testid/get-questions-by-testid.component';


const routes: Routes = [
  {path:"addQuestion", component:AddQuestionComponent},
  {path:"deleteQuestion", component:DeleteQuestionComponent},
  {path:"updateQuestion", component:UpdateQuestionComponent},
  {path:"getQuestionsByTestId", component:GetQuestionsByTestidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
