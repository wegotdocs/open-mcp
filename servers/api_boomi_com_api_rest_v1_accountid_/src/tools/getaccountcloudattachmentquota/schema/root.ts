import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A unique ID generated for a newly created or recently updated Cloud quota (using the Account Cloud Attachment quota object). You can use this ID to get a Cloud quota for an account's specific Cloud ID.")
}