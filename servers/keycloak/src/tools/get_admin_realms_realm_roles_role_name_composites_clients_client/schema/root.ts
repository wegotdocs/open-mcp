import { z } from "zod"

export const inputParamsSchema = {
  "client-uuid": z.string(),
  "role-name": z.string().describe("role's name (not id!)")
}