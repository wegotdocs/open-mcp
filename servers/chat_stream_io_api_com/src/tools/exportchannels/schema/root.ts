import { z } from "zod"

export const inputParamsSchema = {
  "channels": z.array(z.object({ "cid": z.string().optional(), "id": z.string().describe("Channel ID").optional(), "messages_since": z.string().datetime({ offset: true }).describe("Date to export messages since").optional(), "messages_until": z.string().datetime({ offset: true }).describe("Date to export messages until").optional(), "type": z.string().describe("Channel type").optional() })).describe("Export options for channels"),
  "clear_deleted_message_text": z.boolean().describe("Set if deleted message text should be cleared").optional(),
  "export_users": z.boolean().optional(),
  "include_soft_deleted_channels": z.boolean().describe("Set if you want to include deleted channels").optional(),
  "include_truncated_messages": z.boolean().describe("Set if you want to include truncated messages").optional(),
  "version": z.string().describe("Export version").optional()
}