import { z } from "zod"

export const inputParamsSchema = {
  "min_lon": z.number().gte(-180).lte(180).describe("Minimum longitude"),
  "max_lon": z.number().gte(-180).lte(180).describe("Maximum longitude"),
  "min_lat": z.number().gte(-90).lte(90).describe("Minimum latitude"),
  "max_lat": z.number().gte(-90).lte(90).describe("Maximum latitude")
}