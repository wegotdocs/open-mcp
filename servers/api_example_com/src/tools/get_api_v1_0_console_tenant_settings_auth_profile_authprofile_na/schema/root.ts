import { z } from "zod"

export const inputParamsSchema = {
  "tenant": z.string().describe("tenant"),
  "authprofile_name": z.string().describe("authprofile_name")
}