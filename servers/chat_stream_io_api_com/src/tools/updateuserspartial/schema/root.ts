import { z } from "zod"

export const inputParamsSchema = {
  "users": z.array(z.object({ "id": z.string().describe("User ID to update"), "set": z.record(z.any()).optional(), "unset": z.array(z.string()).optional() }))
}