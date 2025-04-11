import { z } from "zod"

export const inputParams = {
  "password": z.string().describe("The password to use when accessing the Managed Service."),
  "username": z.string().min(0).max(5000).describe("The username to use when accessing the Managed Service.").optional()
}