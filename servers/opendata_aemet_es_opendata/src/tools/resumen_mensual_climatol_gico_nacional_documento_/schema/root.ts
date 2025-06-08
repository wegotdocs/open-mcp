import { z } from "zod"

export const inputParamsSchema = {
  "anio": z.string().describe("Año (AAAA)"),
  "mes": z.string().describe("Mes (mm)")
}