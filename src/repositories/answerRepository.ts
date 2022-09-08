import { prisma } from "./../config/database";


async function findById(questionId: number){
    return prisma.answer.findUnique({
        where: { id: questionId }
    });
}

