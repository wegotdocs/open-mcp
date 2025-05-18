import { z } from "zod"

export const inputParamsSchema = {
  "altitude": z.number().describe("Altitude above the reference ellipsoid, in meters.").optional(),
  "latitude": z.number().describe("Latitude in degrees.").optional(),
  "longitude": z.number().describe("Longitude in degrees.").optional()
}