import { z } from "zod"

export const inputParamsSchema = {
  "lon": z.number().gte(-180).lte(180).describe("Longitude"),
  "lat": z.number().gte(-90).lte(90).describe("Latitude"),
  "top_k": z.number().int().gte(0).lte(30).describe("Number of most probable soil types that will be returned, sorted by probability in descending order").optional()
}