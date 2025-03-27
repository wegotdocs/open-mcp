import { z } from "zod";
export const toolName = `activity_set_thread_subscription`;
export const toolDescription = `Set a thread subscription`;
export const baseUrl = `https://api.github.com`;
export const path = `/notifications/threads/{thread_id}/subscription`;
export const method = `put`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "thread_id": z.number().int().describe("The unique identifier of the notification thread. This corresponds to the value returned in the `id` field when you retrieve notifications (for example with the [`GET /notifications` operation](https://docs.github.com/rest/reference/activity#list-notifications-for-the-authenticated-user)).") }).optional(), "body": z.object({ "ignored": z.boolean().describe("Whether to block all notifications from a thread.") }).optional() }).shape;
