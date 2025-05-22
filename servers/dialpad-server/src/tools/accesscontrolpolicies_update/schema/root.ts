import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The access control policy's id."),
  "description": z.string().nullable().describe("[single-line only]\n\nOptional description for the policy.").optional(),
  "name": z.string().nullable().describe("[single-line only]\n\nA human-readable display name for the policy.").optional(),
  "permission_sets": z.array(z.enum(["agent_settings_write","agents_admins_manage_agents_settings_write","agents_admins_skill_level_write","auto_call_recording_and_transcription_settings_write","business_hours_write","call_blocking_spam_prevention_settings_write","call_dispositions_settings_write","call_routing_hours_settings_write","cc_call_settings_write","chrome_extension_compliance_settings_write","csat_surveys_write","dashboard_and_alerts_write","dialpad_ai_settings_write","holiday_hours_settings_write","integrations_settings_write","name_language_description_settings_write","number_settings_write","supervisor_settings_write"])).nullable().describe("List of permission associated with this policy.").optional(),
  "state": z.literal("active").nullable().describe("Restore a deleted policy.").optional(),
  "user_id": z.number().int().nullable().describe("user id updating this policy. Must be a company admin").optional()
}