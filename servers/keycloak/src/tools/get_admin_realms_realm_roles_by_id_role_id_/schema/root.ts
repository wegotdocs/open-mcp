import { z } from "zod"

export const inputParams = {
  "role-id": z.string().describe("id of role")
}