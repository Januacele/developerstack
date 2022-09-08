import { Request, Response } from 'express';
import questionService from '../services/questionService';
import { CreateQuestionData } from '../services/questionService';

export async function createQuestion(req: Request, res: Response) {
  const question: CreateQuestionData = req.body;
  await questionService.insert(question);

  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  // TODO
}

export async function get(req: Request, res: Response) {
  // TODO
}

export async function getById(req: Request, res: Response) {
  // TODO
}
