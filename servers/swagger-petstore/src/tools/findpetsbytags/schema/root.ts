import { z } from "zod"

export const inputParams = {
  "tags": z.array(z.string()).describe("Tags to filter by").optional()
}