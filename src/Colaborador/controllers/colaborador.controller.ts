import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	ParseIntPipe,
	Post,
	Put,
} from '@nestjs/common';

import { Colaborador } from '../entities/colaborador.entity';
import { ColaboradorService } from '../services/colaborador.service';

@Controller('/colaboradores')
export class ColaboradorController {
	constructor(private readonly colaboradorService: ColaboradorService) {}

	@Get()
	@HttpCode(HttpStatus.OK)
	findAll(): Promise<Colaborador[]> {
		return this.colaboradorService.findAll();
	}

	@Get('/:id')
	@HttpCode(HttpStatus.OK)
	findById(@Param('id', ParseIntPipe) id: number): Promise<Colaborador> {
		return this.colaboradorService.findById(id);
	}

	@Get('/cargo/:cargo')
	@HttpCode(HttpStatus.OK)
	findAllByCargo(@Param('cargo') cargo: string): Promise<Colaborador[]> {
		return this.colaboradorService.findAllByCargo(cargo);
	}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	create(@Body() colaborador: Colaborador): Promise<Colaborador> {
		return this.colaboradorService.create(colaborador);
	}

	@Put(':id')
	@HttpCode(HttpStatus.OK)
	update(
		@Body() colaborador: Colaborador,
		@Param('id', ParseIntPipe) id: number,
	): Promise<Colaborador> {
		return this.colaboradorService.update(colaborador, id);
	}

	@Delete('/:id')
	@HttpCode(HttpStatus.NO_CONTENT)
	delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
		return this.colaboradorService.delete(id);
	}
}
