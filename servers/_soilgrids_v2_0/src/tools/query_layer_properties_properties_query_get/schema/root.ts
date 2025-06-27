import { z } from "zod"

export const inputParamsSchema = {
  "lon": z.number().gte(-180).lte(180).describe("Longitude coordinate between -180 and 180"),
  "lat": z.number().gte(-90).lte(90).describe("Latitude coordinate between 90 and 90"),
  "property": z.array(z.string()).optional(),
  "depth": z.array(z.string()).optional(),
  "value": z.array(z.string()).optional()
}