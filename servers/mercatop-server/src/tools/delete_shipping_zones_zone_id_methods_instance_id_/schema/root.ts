import { z } from "zod"

export const inputParamsSchema = {
  "zone_id": z.number().int().describe("Unique ID for the zone."),
  "instance_id": z.number().int().describe("Unique ID for the instance."),
  "force": z.boolean().describe("Whether to bypass trash and force deletion.").optional()
}