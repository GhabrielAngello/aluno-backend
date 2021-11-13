import { Router, request, response, Request, Response } from 'express'
import { getAlunos } from './controller/AlunosController';
import { saveAlunos } from './controller/AlunosController';
import { getAluno } from './controller/AlunosController';
import { updateAluno } from './controller/AlunosController';
import { deleteAluno } from './controller/AlunosController';
import { matriculadoAluno } from './controller/AlunosController';


const routes = Router()

routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Bem Vindos Ao Cadastro Alunos!' })
})

routes.get('/alunos', getAlunos)
routes.post('/alunos', saveAlunos)
routes.get('/alunos/:id', getAluno)
routes.put('/alunos/:id', updateAluno)
routes.delete('/alunos/:id', deleteAluno)
routes.patch('/alunos/:id', matriculadoAluno)


export default routes