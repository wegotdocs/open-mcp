import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "workflowId": z.string().describe("The object id of the workflow instance."),
  "id": z.string().describe("The r_object_id of queried object.")
}