import { z } from "zod"

export const inputParamsSchema = {
  "webhookId": z.string().describe("The ID of the webhook"),
  "resourceId": z.string().uuid().describe("The resource id to resend notifications for"),
  "excludeStatuses": z.array(z.enum(["COMPLETED","FAILED","IN_PROGRESS","ON_HOLD"]).describe("The status of the Notification")).describe("(optional) List of notification statuses to exclude from the resend operation\n    - Empty array means all statuses will be included\n    - If you want to exclude some statuses, you can use the following example: [ IN_PROGRESS, FAILED ]\n    - Default if missing, means all statuses other than \"COMPLETED\" will be included\n").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}