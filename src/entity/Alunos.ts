import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Alunos {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column({

        type: 'date',
        nullable: true
    })
    nascimento: Date

    @Column()
    idade: number;

    @Column()
    ra: number;

    @Column()
    endereço: string;
    @Column({
        default: false
    })
    matriculado: boolean;
}