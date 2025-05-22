import { z } from "zod"

export const inputParamsSchema = {
  "custom_data": z.string().nullable().describe("Extra data to associate with the call. This will be passed through to any subscribed call events.").optional(),
  "outbound_caller_id": z.string().nullable().describe("The e164-formatted number shown to the call recipient (or \"blocked\").").optional(),
  "phone_number": z.string().nullable().describe("The e164-formatted number to call."),
  "target_id": z.number().int().nullable().describe("The ID of a group that will be used to initiate the call."),
  "target_type": z.enum(["callcenter","department","office"]).nullable().describe("The type of a group that will be used to initiate the call.")
}