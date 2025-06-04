import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The user's email address. The special value `me` can be used to indicate the authenticated user."),
  "color": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `color` to the tool, first call the tool `expandSchema` with \"/properties/color\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The color to assign to the label. Color is only available for labels that have their `type` set to `user`.</property-description>").optional(),
  "id": z.string().describe("The immutable ID of the label.").optional(),
  "labelListVisibility": z.enum(["labelShow","labelShowIfUnread","labelHide"]).describe("The visibility of the label in the label list in the Gmail web interface.").optional(),
  "messageListVisibility": z.enum(["show","hide"]).describe("The visibility of messages with this label in the message list in the Gmail web interface.").optional(),
  "messagesTotal": z.number().int().describe("The total number of messages with the label.").optional(),
  "messagesUnread": z.number().int().describe("The number of unread messages with the label.").optional(),
  "name": z.string().describe("The display name of the label.").optional(),
  "threadsTotal": z.number().int().describe("The total number of threads with the label.").optional(),
  "threadsUnread": z.number().int().describe("The number of unread threads with the label.").optional(),
  "type": z.enum(["system","user"]).describe("The owner type for the label. User labels are created by the user and can be modified and deleted by the user and can be applied to any message or thread. System labels are internally created and cannot be added, modified, or deleted. System labels may be able to be applied to or removed from messages and threads under some circumstances but this is not guaranteed. For example, users can apply and remove the `INBOX` and `UNREAD` labels from messages and threads, but cannot apply or remove the `DRAFTS` or `SENT` labels from messages or threads.").optional()
}