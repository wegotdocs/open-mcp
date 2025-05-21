import { z } from "zod"

export const inputParamsSchema = {
  "latitude": z.number().describe("Latitud geográfica"),
  "longitude": z.number().describe("Longitud geográfica"),
  "current": z.string().describe("Variables meteorológicas actuales a incluir").optional(),
  "hourly": z.string().describe("Variables meteorológicas por hora a incluir").optional()
}