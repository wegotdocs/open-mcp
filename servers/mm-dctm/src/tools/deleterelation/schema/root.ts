import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "relationId": z.string().describe("The r_object_id of the relation instance.")
}