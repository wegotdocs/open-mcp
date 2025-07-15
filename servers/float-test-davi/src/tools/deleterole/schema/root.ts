import { z } from "zod"

export const inputParamsSchema = {
  "role_id": z.number().int().describe("The role's ID")
}