import { z } from "zod"

export const inputParamsSchema = {
  "estaciones": z.string().describe("Listado de indicativos climatológicos (id1,id2,id3,...,idn)")
}