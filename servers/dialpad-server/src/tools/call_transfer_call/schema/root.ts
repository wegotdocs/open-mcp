import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The call's id."),
  "custom_data": z.string().nullable().describe("Extra data to associate with the call. This will be passed through to any subscribed call events.").optional(),
  "to": z.object({ "call_id": z.number().int().nullable().describe("The id of the ongoing call which the call should be transferred to.") }).nullable().describe("Destination of the call that will be transfer. It can be a single option between a number, \nan existing call or a target").optional(),
  "transfer_state": z.enum(["hold","parked","preanswer","voicemail"]).nullable().describe("The state which the call should take when it's transferred to.").optional()
}