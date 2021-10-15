import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "src/entities/person";
import { Repository } from "typeorm";
import { SavePersonCommand } from "../impl/save-person.command";

@CommandHandler(SavePersonCommand)
export class SavePersonHandler implements ICommandHandler<SavePersonCommand> {

    constructor(
        @InjectRepository(Person) private personRepo: Repository<Person>,
      ) {}
    async execute(command: SavePersonCommand) {
        var person = new Person();
        person.age = command.age;
        person.name = command.name;
        await this.personRepo.insert(person);
    }
}
