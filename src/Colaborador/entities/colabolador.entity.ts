import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsDateString } from 'class-validator';

@Entity({ name: 'tb_colaboradores' })
export class Colaborador {
	@PrimaryGeneratedColumn()
	id: number;

	@IsNotEmpty()
	@Column({ length: 255, nullable: false })
	nome: string;

	@IsNotEmpty()
	@Column({ length: 11, nullable: false })
	cpf: string;

	@IsNotEmpty()
	@Column({ length: 255, nullable: false })
	setor: string;

	@IsDateString()
	@Column({ type: 'date', nullable: false })
	dataAdmissao: Date;
}
