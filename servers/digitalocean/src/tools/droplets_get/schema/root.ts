import { z } from "zod"

export const inputParamsSchema = {
  "droplet_id": z.number().int().gte(1).describe("A unique identifier for a Droplet instance.")
}