import { z } from "zod"

export const inputParamsSchema = {
  "allow_pause_recording": z.boolean().nullable().describe("Allow agents to stop/restart a recording during a call. Default is False.").optional(),
  "call_recording_inbound": z.boolean().nullable().describe("Whether or not inbound calls to this call center get automatically recorded. Default is False.").optional(),
  "call_recording_outbound": z.boolean().nullable().describe("Whether or not outbound calls from this call center get automatically recorded. Default is False.").optional()
}