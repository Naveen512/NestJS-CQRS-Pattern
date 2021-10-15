import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from 'src/entities/person';
import { SavePersonHandler } from './commands/handler/save-person.handler';
import { PersonController } from './person.controller';
import { GetPersonsHandler } from './queries/handlers/get-persons.handler';

@Module({
  imports:[TypeOrmModule.forFeature([Person]), CqrsModule],
  controllers: [PersonController],
  providers:[GetPersonsHandler, SavePersonHandler]
})
export class PersonModule {}
