package com.capg.onlinetest.controller;

import java.math.BigInteger;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capg.onlinetest.dto.QuestionDto;
import com.capg.onlinetest.entity.Question;
import com.capg.onlinetest.service.QuestionServiceImpl;


@RestController
@RequestMapping("/questions")
public class QuestionMgtController {
	
	@Autowired
	private QuestionServiceImpl service;
	
	@GetMapping
	public ResponseEntity<List<Question>> getAllQuestions(){
		List<Question> allquestions = service.getAllQuestions();
		return new ResponseEntity<List<Question>>(allquestions, HttpStatus.OK);
	}
	
	@GetMapping("/test/{testId}") 
	public ResponseEntity<List<Question>> getAllQuestionsByTestId(@PathVariable BigInteger testId){
		List<Question> questions = service.getAllQuestionsByTestId(testId);
		return new ResponseEntity<List<Question>>(questions, HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<Question> addQuestion(@RequestBody QuestionDto dto){
		Question question = convert(dto);
		service.addQuestion(question);
		return new ResponseEntity<Question>(question, HttpStatus.OK);		
	}
	
	@PutMapping("/update/{questionId}")
	public ResponseEntity<Question> updateQuestion(@RequestBody QuestionDto dto,@PathVariable BigInteger questionId){
		Question question = convert(dto);
		service.updateQuestion(question, questionId);
		return new ResponseEntity<Question>(question, HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{questionId}")
	public ResponseEntity<Boolean> deleteQuestion(@PathVariable BigInteger questionId){
		service.deleteQuestion(questionId);
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}
	
	public Question convert(QuestionDto dto) {
		Question question = new Question();
		question.setTestId(dto.getTestId());
		//question.setQuestionId(dto.getQuestionId());
		question.setQuestionTitle(dto.getQuestionTitle());
		question.setQuestionAnswer(dto.getQuestionAnswer());
		question.setChosenAnswer(dto.getChosenAnswer());
		question.setQuestionMarks(dto.getQuestionMarks());
		question.setMarksScored(dto.getMarksScored());
		question.setQuestionOptions(dto.getQuestionOptions());
		
		return question;
	}
}
