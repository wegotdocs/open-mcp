import { z } from "zod"

export const inputParamsSchema = {
  "managerId": z.string(),
  "businesses_ids": z.array(z.string().describe("businesses ids")).describe("businesses ids")
}