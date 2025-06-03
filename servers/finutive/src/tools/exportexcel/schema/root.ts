import { z } from "zod"

export const inputParamsSchema = {
  "businessIds": z.array(z.string()).describe("List of business IDs to export")
}