import { z } from "zod"

export const toolName = `migrationresource_workflowrulesearch_post`
export const toolDescription = `Get workflow transition rule configurations`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/atlassian-connect/1/migration/workflow/rule/search`
export const method = `post`
export const security = []

export const inputParams = z.object({ "h_Atlassian-Transfer-Id": z.string().uuid().describe("The app migration transfer ID."), "b_expand": z.string().describe("Use expand to include additional information in the response. This parameter accepts `transition` which, for each rule, returns information about the transition the rule is assigned to.").optional(), "b_ruleIds": z.array(z.string().uuid().describe("Workflow rule ID.")).min(1).max(10).describe("The list of workflow rule IDs."), "b_workflowEntityId": z.string().uuid().describe("The workflow ID.") }).shape