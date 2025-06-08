import { z } from "zod"

export const inputParamsSchema = {
  "municipio": z.string().describe("Municipio")
}