import { z } from "zod"

export const inputParamsSchema = {
  "accountId": z.string().describe("The ID of the account authorizing the call.").optional(),
  "cloudId": z.string().describe("The ID of the Runtime cloud that you want to get, add, edit, or delete a Cloud quota.").optional(),
  "id": z.string().describe("A unique ID generated for a newly created or recently updated Cloud quota \\(using the Account Cloud Attachment quota object\\). You can use this ID to get a Cloud quota for an account's specific Cloud ID.").optional(),
  "maxAtomAttachment": z.number().int().describe("The number of Runtime attachments that you want to set on the Cloud quota.").optional()
}