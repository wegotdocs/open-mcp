import { z } from "zod"

export const toolName = `activity_mark_thread_as_read`
export const toolDescription = `Mark a thread as read`
export const baseUrl = `https://github.com`
export const path = `/notifications/threads/{thread_id}`
export const method = `patch`
export const security = []

export const inputParams = z.object({ "path": z.object({ "thread_id": z.number().int().describe("The unique identifier of the notification thread. This corresponds to the value returned in the `id` field when you retrieve notifications (for example with the [`GET /notifications` operation](https://docs.github.com/rest/reference/activity#list-notifications-for-the-authenticated-user)).") }).optional() }).shape