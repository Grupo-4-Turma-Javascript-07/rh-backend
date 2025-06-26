import { InjectRepository } from '@nestjs/typeorm';
import { Colaborador } from '../entities/colaborador.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
			throw new HttpException('Id não encontrado', HttpStatus.NOT_FOUND);
		}

		return colaborador;
	}

	async findAllByCargo(cargo: string): Promise<Colaborador[]> {
		return await this.colaboradorRepository.find({
			where: {
				cargo: ILike(`%${cargo}%`),
			},
		});
	}

	async create(colaborador: Colaborador): Promise<Colaborador> {
		return await this.colaboradorRepository.save(colaborador);
	}

	async update(colaborador: Colaborador): Promise<Colaborador> {
		await this.findById(colaborador.id);

		return await this.colaboradorRepository.save(colaborador);
	}

	async delete(id: number): Promise<void> {
		await this.findById(id);

		await this.colaboradorRepository.delete(id);
	}
}
