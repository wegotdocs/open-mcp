import { z } from "zod"

export const inputParams = {
  "workflows": z.array(z.object({ "workflowId": z.object({ "draft": z.boolean().describe("Whether the workflow is in the draft state."), "name": z.string().describe("The name of the workflow.") }).strict().describe("Properties that identify a workflow."), "workflowRuleIds": z.array(z.string().describe("The list of connect workflow rule IDs.")).describe("The list of connect workflow rule IDs.") }).strict().describe("Details about a workflow configuration update request.")).describe("The list of workflows with transition rules to delete.")
}