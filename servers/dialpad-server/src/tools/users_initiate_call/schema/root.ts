import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The user's id. ('me' can be used if you are using a user level API key)"),
  "custom_data": z.string().nullable().describe("Extra data to associate with the call. This will be passed through to any subscribed call events.").optional(),
  "group_id": z.number().int().nullable().describe("The ID of a group that will be used to initiate the call.").optional(),
  "group_type": z.enum(["callcenter","department","office"]).nullable().describe("The type of a group that will be used to initiate the call.").optional(),
  "outbound_caller_id": z.string().nullable().describe("The e164-formatted number shown to the call recipient (or \"blocked\").\n\nIf set to \"blocked\", the recipient will receive a call from \"unknown caller\". The number can be the caller's number, or the caller's group number if the group is provided,\nor the caller's company reserved number.").optional(),
  "phone_number": z.string().nullable().describe("The e164-formatted number to call.").optional()
}