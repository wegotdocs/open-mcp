import { z } from "zod"

export const inputParams = {
  "projectId": z.number().int().describe("The project ID."),
  "emailAddress": z.string().describe("The email address.").optional(),
  "emailAddressStatus": z.array(z.string()).describe("When using a custom domain, the status of the email address.").optional()
}