import { z } from "zod"

export const inputParamsSchema = {
  "tenant": z.string().describe("Tenant ID"),
  "event": z.enum(["credential_accepted","credential_failure","credential_deleted"]),
  "event_description": z.union([z.null(), z.string()]).optional(),
  "notification_id": z.string()
}