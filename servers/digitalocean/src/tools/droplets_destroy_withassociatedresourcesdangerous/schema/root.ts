import { z } from "zod"

export const inputParamsSchema = {
  "droplet_id": z.number().int().gte(1).describe("A unique identifier for a Droplet instance."),
  "X-Dangerous": z.boolean().describe("Acknowledge this action will destroy the Droplet and all associated resources and _can not_ be reversed.")
}