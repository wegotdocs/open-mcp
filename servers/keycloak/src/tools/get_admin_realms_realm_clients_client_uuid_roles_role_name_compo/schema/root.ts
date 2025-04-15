import { z } from "zod"

export const inputParamsSchema = {
  "role-name": z.string().describe("role's name (not id!)")
}