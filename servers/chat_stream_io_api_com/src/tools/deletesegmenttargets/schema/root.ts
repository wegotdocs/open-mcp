import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().max(255),
  "target_ids": z.array(z.string()).describe("Target IDs")
}