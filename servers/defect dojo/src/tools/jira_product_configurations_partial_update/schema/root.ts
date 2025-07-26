import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this jir a_ project."),
  "project_key": z.string().max(200).optional(),
  "issue_template_dir": z.string().max(255).nullable().describe("Choose the folder containing the Django templates used to render the JIRA issue description. These are stored in dojo/templates/issue-trackers. Leave empty to use the default jira_full templates.").optional(),
  "component": z.string().max(200).optional(),
  "custom_fields": z.any().nullable().describe("JIRA custom field JSON mapping of Id to value, e.g. {\"customfield_10122\": [{\"name\": \"8.0.1\"}]}").optional(),
  "default_assignee": z.string().max(200).nullable().describe("JIRA default assignee (name). If left blank then it defaults to whatever is configured in JIRA.").optional(),
  "jira_labels": z.string().max(200).nullable().describe("JIRA issue labels space seperated").optional(),
  "add_vulnerability_id_to_jira_label": z.boolean().optional(),
  "push_all_issues": z.boolean().describe("Automatically create JIRA tickets for verified findings, assuming enforce_verified_status is True, or for all findings otherwise. Once linked, the JIRA ticket will continue to sync, regardless of status in DefectDojo.").optional(),
  "enable_engagement_epic_mapping": z.boolean().optional(),
  "epic_issue_type_name": z.string().max(64).describe("The name of the of structure that represents an Epic").optional(),
  "push_notes": z.boolean().optional(),
  "product_jira_sla_notification": z.boolean().optional(),
  "risk_acceptance_expiration_notification": z.boolean().optional(),
  "enabled": z.boolean().describe("When disabled, Findings will no longer be pushed to Jira, even if they have already been pushed previously.").optional(),
  "jira_instance": z.number().int().nullable().optional(),
  "product": z.number().int().nullable().optional(),
  "engagement": z.number().int().nullable().optional()
}