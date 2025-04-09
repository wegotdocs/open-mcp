import { z } from "zod"

export const inputParams = {
  "idOrName": z.string().describe("The ID or name of the project to transfer."),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "callbackUrl": z.string().describe("The URL to send a webhook to when the transfer is accepted.").optional(),
  "callbackSecret": z.string().describe("The secret to use to sign the webhook payload with HMAC-SHA256.").optional()
}