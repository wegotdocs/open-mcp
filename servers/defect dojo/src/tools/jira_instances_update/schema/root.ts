import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this jir a_ instance."),
  "configuration_name": z.string().min(1).max(2000).describe("Enter a name to give to this configuration").optional(),
  "url": z.string().url().min(1).max(2000).describe("For more information how to configure Jira, read the DefectDojo documentation."),
  "username": z.string().min(1).max(2000).describe("Username or Email Address, see DefectDojo documentation for more information."),
  "password": z.string().min(1).max(2000).describe("Password, API Token, or Personal Access Token, see DefectDojo documentation for more information."),
  "default_issue_type": z.enum(["Task","Story","Epic","Spike","Bug","Security"]).describe("You can define extra issue types in settings.py\n\n* `Task` - Task\n* `Story` - Story\n* `Epic` - Epic\n* `Spike` - Spike\n* `Bug` - Bug\n* `Security` - Security").optional(),
  "issue_template_dir": z.string().max(255).nullable().describe("Choose the folder containing the Django templates used to render the JIRA issue description. These are stored in dojo/templates/issue-trackers. Leave empty to use the default jira_full templates.").optional(),
  "epic_name_id": z.number().int().gte(-2147483648).lte(2147483647).describe("To obtain the 'Epic name id' visit https://<YOUR JIRA URL>/rest/api/2/field and search for Epic Name. Copy the number out of cf[number] and paste it here."),
  "open_status_key": z.number().int().gte(-2147483648).lte(2147483647).describe("Transition ID to Re-Open JIRA issues, visit https://<YOUR JIRA URL>/rest/api/latest/issue/<ANY VALID ISSUE KEY>/transitions?expand=transitions.fields to find the ID for your JIRA instance"),
  "close_status_key": z.number().int().gte(-2147483648).lte(2147483647).describe("Transition ID to Close JIRA issues, visit https://<YOUR JIRA URL>/rest/api/latest/issue/<ANY VALID ISSUE KEY>/transitions?expand=transitions.fields to find the ID for your JIRA instance"),
  "info_mapping_severity": z.string().min(1).max(200).describe("Maps to the 'Priority' field in Jira. For example: Info"),
  "low_mapping_severity": z.string().min(1).max(200).describe("Maps to the 'Priority' field in Jira. For example: Low"),
  "medium_mapping_severity": z.string().min(1).max(200).describe("Maps to the 'Priority' field in Jira. For example: Medium"),
  "high_mapping_severity": z.string().min(1).max(200).describe("Maps to the 'Priority' field in Jira. For example: High"),
  "critical_mapping_severity": z.string().min(1).max(200).describe("Maps to the 'Priority' field in Jira. For example: Critical"),
  "finding_text": z.string().nullable().describe("Additional text that will be added to the finding in Jira. For example including how the finding was created or who to contact for more information.").optional(),
  "accepted_mapping_resolution": z.string().max(300).nullable().describe("JIRA issues that are closed in JIRA with one of these resolutions will result in the Finding becoming Risk Accepted in Defect Dojo. This Risk Acceptance will not have an expiration date. This mapping is not used when Findings are pushed to JIRA. In that case the Risk Accepted Findings are closed in JIRA and JIRA sets the default resolution.").optional(),
  "false_positive_mapping_resolution": z.string().max(300).nullable().describe("JIRA issues that are closed in JIRA with one of these resolutions will result in the Finding being marked as False Positive Defect Dojo. This mapping is not used when Findings are pushed to JIRA. In that case the Finding is closed in JIRA and JIRA sets the default resolution.").optional(),
  "global_jira_sla_notification": z.boolean().describe("This setting can be overidden at the Product level").optional(),
  "finding_jira_sync": z.boolean().describe("If enabled, this will sync changes to a Finding automatically to JIRA").optional()
}