import { z } from "zod"

export const inputParams = {
  "client-uuid": z.string(),
  "role-name": z.string().describe("role's name (not id!)")
}