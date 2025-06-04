import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The user's email address. The special value `me` can be used to indicate the authenticated user."),
  "id": z.string().describe("The ID of the thread to modify."),
  "addLabelIds": z.array(z.string()).describe("A list of IDs of labels to add to this thread. You can add up to 100 labels with each update.").optional(),
  "removeLabelIds": z.array(z.string()).describe("A list of IDs of labels to remove from this thread. You can remove up to 100 labels with each update.").optional()
}