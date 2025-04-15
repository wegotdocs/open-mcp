import { z } from "zod"

export const inputParamsSchema = {
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "name": z.string().describe("The name of the secret (max 100 characters)."),
  "value": z.string().describe("The value of the new secret."),
  "decryptable": z.boolean().describe("Whether the secret value can be decrypted after it has been created.").optional()
}