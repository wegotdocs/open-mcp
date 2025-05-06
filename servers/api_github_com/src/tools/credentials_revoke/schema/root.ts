import { z } from "zod"

export const inputParamsSchema = {
  "credentials": z.array(z.string()).min(1).max(1000).describe("A list of credentials to be revoked, up to 1000 per request.")
}