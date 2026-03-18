import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactoModule } from './contacto/contacto.module';
import { Mensaje } from './contacto/mensaje.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Mensaje],
      synchronize: true,
      ssl: { rejectUnauthorized: false },
    }),
    ContactoModule,
  ],
})
export class AppModule {}