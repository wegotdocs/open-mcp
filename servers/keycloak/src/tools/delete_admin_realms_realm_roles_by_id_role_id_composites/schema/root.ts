import { z } from "zod"

export const inputParamsSchema = {
  "role-id": z.string().describe("Role id")
}