import mongoose from "mongoose";
import MongoClass from "../contenedores/mongoClass";
import { mensajes } from "../servidor";

const schemaMensajes = new mongoose.schema({
    mensajes
})

export class MongoDBMensajes extends MongoClass {
    constructor(){
        super("mensajes", schemaMensajes)
    }
}