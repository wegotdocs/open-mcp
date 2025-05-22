import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The event subscription's ID, which is generated after creating an event subscription successfully."),
  "call_states": z.array(z.enum(["admin","admin_recording","ai_playbook","all","barge","blocked","call_transcription","calling","connected","csat","dispositions","eavesdrop","hangup","hold","merged","missed","monitor","parked","pcsat","postcall","preanswer","queued","recap_action_items","recap_outcome","recap_purposes","recap_summary","recording","ringing","takeover","transcription","voicemail","voicemail_uploaded"])).nullable().describe("The call event subscription's list of call states.").optional(),
  "enabled": z.boolean().nullable().describe("Whether or not the call event subscription is enabled.").optional(),
  "endpoint_id": z.number().int().nullable().describe("The logging endpoint's ID, which is generated after creating a webhook or websocket successfully. If you plan to pair this event subscription with another logging endpoint,\nplease provide a valid webhook ID here.").optional(),
  "group_calls_only": z.boolean().nullable().describe("Call event subscription for group calls only.").optional(),
  "target_id": z.number().int().nullable().describe("The ID of the specific target for which events should be sent.").optional(),
  "target_type": z.enum(["callcenter","callrouter","channel","coachinggroup","coachingteam","department","office","room","staffgroup","unknown","user"]).nullable().describe("The target type.").optional()
}