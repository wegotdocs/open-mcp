import { z } from "zod"

export const inputParams = {
  "idOrName": z.string().describe("The name or the unique identifier to which the secret belongs to."),
  "decrypt": z.enum(["true","false"]).describe("Whether to try to decrypt the value of the secret. Only works if `decryptable` has been set to `true` when the secret was created.").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}