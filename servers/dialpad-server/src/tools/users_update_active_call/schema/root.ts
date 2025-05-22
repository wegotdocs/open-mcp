import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The user's id. ('me' can be used if you are using a user level API key)"),
  "is_recording": z.boolean().nullable().describe("Whether or not recording should be enabled.").optional(),
  "play_message": z.boolean().nullable().describe("Whether or not to play a message to indicate the call is being recorded (or recording has stopped).").optional(),
  "recording_type": z.enum(["all","group","user"]).nullable().describe("Whether or not to toggle recording for the operator call (personal recording),\nthe group call (department recording), or both.\n\nOnly applicable for group calls (call centers, departments, etc.)").optional()
}