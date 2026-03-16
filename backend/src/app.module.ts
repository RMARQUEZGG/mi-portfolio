import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactoModule } from './contacto/contacto.module';
import { Mensaje } from '././contacto/mensaje.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres123',
      database: 'portfolio_db',
      entities: [Mensaje],
      synchronize: true,
    }),
    ContactoModule,
  ],
})
export class AppModule {}