import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "id": z.string().describe("The r_object_id of queried object."),
  "trace": z.string().describe("Whether make the audit trail traceable when purging it.").optional()
}