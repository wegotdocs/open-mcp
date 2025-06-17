import { z } from "zod"

export const inputParamsSchema = {
  "passwordPattern": z.string().describe("Allowed password pattern").optional(),
  "credentialTtl": z.number().int().describe("The default lifetime of the credential in seconds").optional(),
  "authTokenTtl": z.number().int().describe("The default lifetime of the auth-token in seconds").optional(),
  "resetTokenTtl": z.number().int().describe("The default lifetime of the reset-token in seconds").optional()
}