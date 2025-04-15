import { z } from "zod"

export const inputParamsSchema = {
  "transitionId": z.number().int().describe("The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition."),
  "key": z.string().describe("The key of the property being added, also known as the name of the property. Set this to the same value as the `key` defined in the request body."),
  "workflowName": z.string().describe("The name of the workflow that the transition belongs to."),
  "workflowMode": z.enum(["live","draft"]).describe("The workflow status. Set to *live* for inactive workflows or *draft* for draft workflows. Active workflows cannot be edited.").optional(),
  "id": z.string().describe("The ID of the transition property.").readonly().optional(),
  "b_key": z.string().describe("The key of the transition property. Also known as the name of the transition property.").readonly().optional(),
  "value": z.string().describe("The value of the transition property.")
}