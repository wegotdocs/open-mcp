import { z } from "zod"

export const inputParamsSchema = {
  "lat": z.number().describe("Latitude of the location."),
  "lon": z.number().describe("Longitude of the location."),
  "appid": z.string().describe("API key for authentication.")
}