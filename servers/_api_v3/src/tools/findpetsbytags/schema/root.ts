import { z } from "zod"

export const inputParamsSchema = {
  "tags": z.array(z.string()).describe("Tags to filter by").optional()
}