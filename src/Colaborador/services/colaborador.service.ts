import { InjectRepository } from '@nestjs/typeorm';
import { Colaborador } from '../entities/colaborador.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class ColaboradorService {
	constructor(
		@InjectRepository(Colaborador)
		private colaboradorRepository: Repository<Colaborador>,
	) {}

	async findAll(): Promise<Colaborador[]> {
		return await this.colaboradorRepository.find();
	}

	async findById(id: number): Promise<Colaborador> {
		const colaborador = await this.colaboradorRepository.findOne({
			where: {
				id,
			},
		});

		if (!colaborador) {
			throw new NotFoundException('Id não encontrado');
		}

		return colaborador;
	}

	async findAllByCargo(cargo: string): Promise<Colaborador[]> {
		const cargoColaborador = await this.colaboradorRepository.find({
			where: {
				cargo: ILike(`%${cargo}%`),
			},
		});
		if (cargoColaborador.length === 0) {
			throw new NotFoundException(
				'nenhum colaborador com esse cargo encontrado!',
			);
		}
		return cargoColaborador;
	}

	async create(colaborador: Colaborador): Promise<Colaborador> {
		return await this.colaboradorRepository.save(colaborador);
	}

	async update(colaborador: Colaborador, id: number): Promise<Colaborador> {
		const colaboradorAntigo = await this.findById(id);

		const colaboradorAtualizado = this.colaboradorRepository.create({
			...colaboradorAntigo,
			cargo: colaborador.cargo,
			cpf: colaborador.cpf,
		});

		return await this.colaboradorRepository.save(colaboradorAtualizado);
	}

	async delete(id: number): Promise<void> {
		await this.findById(id);

		await this.colaboradorRepository.delete(id);
	}
}
