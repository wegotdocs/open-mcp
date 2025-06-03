import { z } from "zod"

export const inputParamsSchema = {
  "addLabelIds": z.array(z.string()).describe("List of labels to add to the message.").optional(),
  "forward": z.string().describe("Email address that the message should be forwarded to.").optional(),
  "removeLabelIds": z.array(z.string()).describe("List of labels to remove from the message.").optional()
}