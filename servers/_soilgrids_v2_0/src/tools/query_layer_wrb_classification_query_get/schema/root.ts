import { z } from "zod"

export const inputParamsSchema = {
  "lon": z.number().gte(-180).lte(180).describe("Longitude coordinate between -180 and 180"),
  "lat": z.number().gte(-90).lte(90).describe("Latitude coordinate between 90 and 90"),
  "number_classes": z.number().int().describe("Number of WRB probability classes that will be return, ordered from higher to lower percentage").optional()
}