import { Request, Response } from 'express';
import questionService from '../services/questionService';
import { CreateQuestionData } from '../services/questionService';
import answerService from '../services/answerService';
import { CreateAnswerData } from '../services/answerService';

export async function createQuestion(req: Request, res: Response) {
  const question: CreateQuestionData = req.body;
  await questionService.insert(question);

  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  const answer : CreateAnswerData = req.body;
  const questionId = parseInt(req.params.id);
  await answerService.insert({...answer, questionId});

  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  // TODO
}

export async function getById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const question = await questionService.findById(id);

  res.send(question);
}
