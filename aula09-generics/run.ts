import { Cavalo } from './../aula07-classes/cavalo';
import { Animal } from './../aula07-classes/animal';
import { Dao } from './dao';

let dao:Dao<Animal> = new Dao<Animal>();
let animal: Animal = new Animal("Rex Generics"); 
let cavalo: Cavalo = new Cavalo("Cavalo Generics");

dao.insert(animal);
dao.insert(cavalo);