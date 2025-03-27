import { z } from "zod"

export const toolName = `activity_mark_notifications_as_read`
export const toolDescription = `Mark notifications as read`
export const baseUrl = `https://api.github.com`
export const path = `/notifications`
export const method = `put`
export const security = []

export const inputParams = z.object({ "body": z.object({ "last_read_at": z.string().datetime({ offset: true }).describe("Describes the last point that notifications were checked. Anything updated since this time will not be marked as read. If you omit this parameter, all notifications are marked as read. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. Default: The current timestamp.").optional(), "read": z.boolean().describe("Whether the notification has been read.").optional() }).optional() }).shape