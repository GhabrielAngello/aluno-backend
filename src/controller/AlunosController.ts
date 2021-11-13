import { getRepository } from "typeorm";
import { Alunos } from '../entity/Alunos';
import { Request, Response } from "express";

export const getAlunos = async (request: Request, response: Response) => {
    const alunos = await getRepository(Alunos).find()
    return response.json(alunos);
};

export const saveAlunos = async (request: Request, response: Response) => {
    const aluno = await getRepository(Alunos).save(request.body)
    return response.json(aluno);
};


export const getAluno = async (request: Request, response: Response) => {
    const { id } = request.params
    const aluno = await getRepository(Alunos).findOne(id)
    return response.json(aluno);
};

export const updateAluno = async (request: Request, response: Response) => {
    const { id } = request.params
    const aluno = await getRepository(Alunos).update(id, request.body)

    if (aluno.affected == 1) {
        const alunoUpdated = await getRepository(Alunos).findOne(id)
        return response.json(alunoUpdated);
    }
    else {
        return response.status(404).json({ message: 'Aluno não foi encontrado!' })
    }
};

export const deleteAluno = async (request: Request, response: Response) => {
    const { id } = request.params
    const aluno = await getRepository(Alunos).delete(id)

    if (aluno.affected == 1) {
        return response.status(200).json({ message: "Aluno excluido com sucesso!" });
    }
    else {
        return response.status(404).json({ message: 'Aluno não foi encontrado!' })
    }
};

export const matriculadoAluno = async (request: Request, response: Response) => {
    const { id } = request.params
    const aluno = await getRepository(Alunos).update(id, {
        matriculado: true,
    })

    if (aluno.affected == 1) {
        const alunoMatriculado = await getRepository(Alunos).findOne(id)
        return response.json(alunoMatriculado);
    }
    else {
        return response.status(404).json({ message: 'Aluno não foi encontrado!' })
    }
};