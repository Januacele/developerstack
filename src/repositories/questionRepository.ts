import { prisma } from "./../config/database";
import { CreateQuestionData } from "../services/questionService";

async function insert(createQuestionData: CreateQuestionData){
    await prisma.question.create({
        data: createQuestionData
    });
}




export default {
    insert
}