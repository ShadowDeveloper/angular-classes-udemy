import { Animal } from './../aula07-classes/animal';
import { DaoInterface } from './dao.interface';
import { AnimalDao } from './animal-dao';

let dao: DaoInterface = new AnimalDao();

let animal: Animal = new Animal("Rex");

dao.insert(animal);