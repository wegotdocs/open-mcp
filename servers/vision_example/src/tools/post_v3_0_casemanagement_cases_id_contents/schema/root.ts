import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The case ID"),
  "attachmentIds": z.array(z.string()).describe("A list of attachment IDs from case notes. Case Management supports up to 5 attachments per note. Each attachment should only be associated with one note.").optional(),
  "comment": z.string().max(1048576).describe("A comment added to the note")
}