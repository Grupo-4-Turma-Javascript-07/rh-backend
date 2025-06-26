import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Colaborador } from './entities/colabolador.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Colaborador])],
	providers: [],
	controllers: [],
	exports: [],
})
export class ColaboradorModule {}
