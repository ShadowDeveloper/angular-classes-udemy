"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cavalo_1 = require("./../aula07-classes/cavalo");
var animal_1 = require("./../aula07-classes/animal");
var dao_1 = require("./dao");
var dao = new dao_1.Dao();
var animal = new animal_1.Animal("Rex Generics");
var cavalo = new cavalo_1.Cavalo("Cavalo Generics");
dao.insert(animal);
dao.insert(cavalo);
//# sourceMappingURL=run.js.map