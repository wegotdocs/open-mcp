import { z } from "zod"

export const inputParamsSchema = {
  "anio": z.string().describe("Año (AAAA)"),
  "decena": z.string().describe("Decena de 01 (primera decena) a 36 (última decena)")
}