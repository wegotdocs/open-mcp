import { z } from "zod"

export const inputParamsSchema = {
  "managers_id": z.array(z.string()).describe("Manager IDs to export")
}