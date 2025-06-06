import { z } from "zod"

export const inputParamsSchema = {
  "zone_id": z.number().int().describe("Unique ID for the zone.")
}