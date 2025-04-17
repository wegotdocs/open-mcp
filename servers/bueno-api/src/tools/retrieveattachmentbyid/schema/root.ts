import { z } from "zod"

export const inputParamsSchema = {
  "attachmentId": z.string().uuid().describe("Unique identifier of the Attachment")
}