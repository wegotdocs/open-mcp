import { z } from "zod"

export const inputParamsSchema = {
  "Authorization": z.string().describe("Bearer Token should belong to admin role, developer role or designer role")
}