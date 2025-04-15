import { z } from "zod"

export const inputParamsSchema = {
  "secret": z.string().describe("Automation bypass to revoked"),
  "regenerate": z.boolean().describe("Whether or not a new automation bypass should be created after the provided secret is revoked")
}