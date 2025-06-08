import { z } from "zod"

export const inputParamsSchema = {
  "anioIniStr": z.string().describe("Año Inicial (AAAA)"),
  "anioFinStr": z.string().describe("Año Final (AAAA)"),
  "idema": z.string().describe("Indicativo climatológico de la EMA")
}