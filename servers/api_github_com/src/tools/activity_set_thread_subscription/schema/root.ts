import { z } from "zod"

export const inputParamsSchema = {
  "thread_id": z.number().int().describe("The unique identifier of the notification thread. This corresponds to the value returned in the `id` field when you retrieve notifications (for example with the [`GET /notifications` operation](https://docs.github.com/rest/activity/notifications#list-notifications-for-the-authenticated-user))."),
  "ignored": z.boolean().describe("Whether to block all notifications from a thread.").optional()
}