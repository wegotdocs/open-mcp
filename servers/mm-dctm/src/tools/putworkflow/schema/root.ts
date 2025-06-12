import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "workflowId": z.string().describe("The object id of the workflow instance."),
  "action": z.string().describe("Specifies what action will be done on the workflow instance, currently, only these actions are supported, RESTART,RESTART-ALL,HALT,HALT-ALL,RESUME,RESUME-ALL,ABORT,CHANGE-SUPERVISOR."),
  "activity": z.string().describe("Specifies the activity name.").optional(),
  "supervisor": z.string().describe("Specifies the new supervisor name when action is CHANGE-SUPERVISOR.").optional(),
  "Accept": z.enum(["application/vnd.emc.documentum+json","application/vnd.emc.documentum+xml","application/hal+json"]).describe("The Accept header.").optional(),
  "Content-Type": z.enum(["application/vnd.emc.documentum+xml","application/vnd.emc.documentum+json","application/hal+json"]).describe("The Content-Type header.").optional()
}