package com.capg.onlinetest.service;

import java.math.BigInteger;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capg.onlinetest.dao.IQuestionDao;
import com.capg.onlinetest.entity.Question;
import com.capg.onlinetest.exception.QuestionNotFoundException;
import com.capg.onlinetest.exception.TestNotFoundException;

@Service
public class QuestionServiceImpl implements IQuestionService {

	@Autowired
	IQuestionDao dao;
	
	@Override
	public List<Question> getAllQuestions() {
		return dao.findAll();
	}
	
	public List<Question> getAllQuestionsByTestId(BigInteger testId){
		List<Question> questions = dao.findByTestId(testId);

		/*
		 * if(questions.isEmpty()) { throw new
		 * TestNotFoundException("No test with Test Id : "+testId+" found."); }
		 */
		return questions;
	}
	
	@Override
	public void addQuestion(Question question) {
		dao.save(question);
	}

	@Override
	public void updateQuestion(Question question, BigInteger questionId) {
		Question old_question = dao.findByQuestionId(questionId);
		if(old_question == null) {
			throw new QuestionNotFoundException("No Question with Question Id : "+questionId+" found");
		}else {
			question.setQuestionId(questionId);
		}
		dao.save(question);
	}

	@Override
	public void deleteQuestion(BigInteger questionId) {
		if(!(dao.existsById(questionId))) {
			throw new QuestionNotFoundException("No Question with Question Id : "+questionId+" found");
		}
		dao.deleteById(questionId);
	}

	

}
