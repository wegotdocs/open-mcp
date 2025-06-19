import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().uuid().describe("ID of the desired user"),
  "active": z.boolean().describe("DEPRECATED - If true, only return non-hidden accounts").optional()
}