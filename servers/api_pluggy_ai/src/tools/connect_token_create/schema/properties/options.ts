import { z } from "zod"

export const inputParamsSchema = {
  "clientUserId": z.string().describe("Client's external identifier for the user, it can be a ID, UUID or even an email. This is free for clients to use.").optional(),
  "webhookUrl": z.string().describe("Url to be notified of this specific item changes").optional(),
  "oauthRedirectUri": z.string().describe("Url to redirect the user after the connect flow").optional(),
  "avoidDuplicates": z.boolean().describe("Avoids creating a new item if there is already one with the same credentials").optional()
}