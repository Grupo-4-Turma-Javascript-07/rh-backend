import { ColaboradorModule } from './colaborador/colaborador.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Colaborador } from './entities/colaborador.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '2224',
      database: 'db_rh',
      entities: [],
      synchronize: true,
    }),
    ColaboradorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
