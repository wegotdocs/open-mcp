import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the branch."),
  "createdBy": z.string().describe("The user who created the branch.").optional(),
  "createdDate": z.string().datetime({ offset: true }).describe("The date and time when the branch was created.").optional(),
  "deleted": z.boolean().describe("Whether the branch is deleted.").optional(),
  "deploymentId": z.string().optional(),
  "description": z.string().optional(),
  "b_id": z.string().describe("The ID of the branch.").optional(),
  "modifiedBy": z.string().describe("The user who last modified the branch.").optional(),
  "modifiedDate": z.string().datetime({ offset: true }).describe("The date and time when the branch was updated.").optional(),
  "name": z.string().describe("The name of the branch.").optional(),
  "packageId": z.string().describe("The ID of the packaged component from which the branch is created.").optional(),
  "parentId": z.string().describe("The ID of the parent branch.").optional(),
  "ready": z.boolean().describe("Whether the branch is ready to use.").optional(),
  "stage": z.string().describe("The branch status: CREATING, NORMAL (ready for use), or DELETING.").optional()
}