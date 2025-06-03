import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The user's email address. The special value `me` can be used to indicate the authenticated user."),
  "id": z.string().describe("The ID of the message to modify."),
  "addLabelIds": z.array(z.string()).describe("A list of IDs of labels to add to this message. You can add up to 100 labels with each update.").optional(),
  "removeLabelIds": z.array(z.string()).describe("A list IDs of labels to remove from this message. You can remove up to 100 labels with each update.").optional()
}