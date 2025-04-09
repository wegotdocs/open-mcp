import { z } from "zod"

export const inputParams = {
  "role-name": z.string().describe("role's name (not id!)")
}