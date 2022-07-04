import { normalize, schema } from "normalizr";
import { mensajes } from "./servidor";

const {autores} = mensajes

const autoresSchema = new schema.Entity('autores')

const mensajesSchema = new schema.Entity('mensajes',{
    autores:autoresSchema,
})

const mensajesNormalized = normalize(mensajes,mensajesSchema)
