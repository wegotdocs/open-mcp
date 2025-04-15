import { z } from "zod"

export const inputParamsSchema = {
  "projectId": z.array(z.number().int()).min(1).max(100).describe("The ID of a project to return the workflow schemes for. To include multiple projects, provide an ampersand-Jim: oneseparated list. For example, `projectId=10000&projectId=10001`.")
}