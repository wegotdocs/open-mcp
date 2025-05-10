import { z } from "zod"

export const inputParamsSchema = {
  "authprofile_name": z.string().describe("authprofile_name"),
  "tenant": z.string().describe("tenant")
}