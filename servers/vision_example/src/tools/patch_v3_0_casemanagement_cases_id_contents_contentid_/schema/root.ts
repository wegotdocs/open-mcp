import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The case ID"),
  "contentId": z.string().describe("The content ID"),
  "attachmentIds": z.array(z.string()).describe("A list of updated attachment IDs from case notes. Case Management supports up to 5 attachments per note. Each attachment should only be associated with one note.").optional(),
  "comment": z.string().max(1048576).describe("The new comment added to the case").optional(),
  "If-Match": z.string().describe("Provide the ETag of the resource to be updated").optional()
}