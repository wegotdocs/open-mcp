import { z } from "zod"

export const inputParamsSchema = {
  "nombre_estacion": z.string().describe(" | Código | Estación de la Red EMEP |\n|----------|----------|\n| 11  | Barcarrota (Badajoz)   |\n| 10  | Cabo de Creus (Girona)   |\n| 09  | Campisábalos (Guadalajara)   |\n| 17  | Doñana (Huelva)  |\n| 14  | Els Torms (Lleida)   |\n| 06  | Mahón (Illes Balears)   |\n| 08  | Niembro-Llanes (Asturias)   |\n| 05  | Noia (A Coruña)   |\n| 16  | O Saviñao (Lugo)   |\n| 13  | Peñausende (Zamora)   |\n| 01  | San Pablo de los Montes (Toledo)   |\n| 07  | Víznar (Granada)   |\n| 12  | Zarra (Valencia) ")
}