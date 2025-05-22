import { z } from "zod"

export const inputParamsSchema = {
  "description": z.string().nullable().describe("[single-line only]\n\nOptional description for the policy. Max 200 characters.").optional(),
  "name": z.string().nullable().describe("[single-line only]\n\nA human-readable display name for the policy. Max 50 characters."),
  "owner_id": z.number().int().nullable().describe("Owner for this policy i.e company admin."),
  "permission_sets": z.array(z.enum(["agent_settings_write","agents_admins_manage_agents_settings_write","agents_admins_skill_level_write","auto_call_recording_and_transcription_settings_write","business_hours_write","call_blocking_spam_prevention_settings_write","call_dispositions_settings_write","call_routing_hours_settings_write","cc_call_settings_write","chrome_extension_compliance_settings_write","csat_surveys_write","dashboard_and_alerts_write","dialpad_ai_settings_write","holiday_hours_settings_write","integrations_settings_write","name_language_description_settings_write","number_settings_write","supervisor_settings_write"])).nullable().describe("List of permission associated with this policy."),
  "target_type": z.enum(["callcenter","company","office"]).nullable().describe("Policy permissions applied at this target level. Defaults to company target type.").optional()
}