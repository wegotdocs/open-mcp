import { z } from "zod"

export const inputParams = {
  "expand": z.string().describe("Use expand to include additional information in the response. This parameter accepts `transition` which, for each rule, returns information about the transition the rule is assigned to.").optional(),
  "ruleIds": z.array(z.string().uuid().describe("Workflow rule ID.")).min(1).max(10).describe("The list of workflow rule IDs."),
  "workflowEntityId": z.string().uuid().describe("The workflow ID."),
  "Atlassian-Transfer-Id": z.string().uuid().describe("The app migration transfer ID.")
}