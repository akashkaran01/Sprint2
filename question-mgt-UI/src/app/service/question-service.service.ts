import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { QuestionDto } from '../model/questionDto';
import { Question } from '../model/question';


@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  client : HttpClient;
    constructor(client:HttpClient){
        this.client = client;
    }

  baseQuestionUrl="http://localhost:8087/questions";

  addQuestion(question : QuestionDto): Observable<Question>{
    let url=this.baseQuestionUrl+"/add";
    let result:Observable<Question>= this.client.post<Question>(url,question);
    return result;
  }

  deleteQuestion(questionId:number):Observable<boolean>{
    let url = this.baseQuestionUrl+"/delete/"+questionId;
    let result: Observable<boolean> = this.client.delete<boolean>(url);
    return result;
  }

  updateQuestion(question: QuestionDto, questionId:number):Observable<Question>{
    let url = this.baseQuestionUrl+"/update/"+questionId;
    let result: Observable<Question> = this.client.put<Question>(url,question);
    return result;
  }

  getQuestionsByTestId(testId:number):Observable<Question[]>
  {
    let url = this.baseQuestionUrl+"/test/"+testId;
    let result: Observable<Question[]> = this.client.get<Question[]>(url);
    return result;
  }

}
