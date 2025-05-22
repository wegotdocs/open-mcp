import { z } from "zod"

export const inputParamsSchema = {
  "custom_data": z.string().nullable().describe("Extra data to associate with the call. This will be passed through to any subscribed call events.").optional(),
  "device_id": z.string().nullable().describe("The device's id.").optional(),
  "group_id": z.number().int().nullable().describe("The ID of a group that will be used to initiate the call.").optional(),
  "group_type": z.enum(["callcenter","department","office"]).nullable().describe("The type of a group that will be used to initiate the call.").optional(),
  "is_consult": z.boolean().nullable().describe("Enables the creation of a second call. If there is an ongoing call, it puts it on hold.").optional(),
  "outbound_caller_id": z.string().nullable().describe("The e164-formatted number shown to the call recipient (or \"blocked\").\n\nIf set to \"blocked\", the recipient will receive a call from \"unknown caller\". The number can be the caller's number, or the caller's group number if the group is provided, or the caller's company reserved number.").optional(),
  "phone_number": z.string().nullable().describe("The e164-formatted number to call."),
  "user_id": z.number().int().nullable().describe("The id of the user who should make the outbound call.")
}