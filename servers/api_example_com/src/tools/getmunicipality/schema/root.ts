import { z } from "zod"

export const inputParamsSchema = {
  "geom": z.string().describe("Géométrie GeoJSON utilisée pour la recherche").optional(),
  "insee": z.string().describe("Code insee de la commune").optional()
}