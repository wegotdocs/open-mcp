import { z } from "zod"

export const inputParamsSchema = {
  "transitionId": z.number().int().describe("The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition."),
  "key": z.string().describe("The name of the transition property to delete, also known as the name of the property."),
  "workflowName": z.string().describe("The name of the workflow that the transition belongs to."),
  "workflowMode": z.enum(["live","draft"]).describe("The workflow status. Set to `live` for inactive workflows or `draft` for draft workflows. Active workflows cannot be edited.").optional()
}