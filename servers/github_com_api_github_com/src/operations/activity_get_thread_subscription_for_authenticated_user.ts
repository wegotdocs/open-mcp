import { z } from "zod"

export const toolName = `activity_get_thread_subscription_for_authenticated_user`
export const toolDescription = `Get a thread subscription for the authenticated user`
export const baseUrl = `https://api.github.com`
export const path = `/notifications/threads/{thread_id}/subscription`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "thread_id": z.number().int().describe("The unique identifier of the notification thread. This corresponds to the value returned in the `id` field when you retrieve notifications (for example with the [`GET /notifications` operation](https://docs.github.com/rest/reference/activity#list-notifications-for-the-authenticated-user)).") }).optional() }).shape