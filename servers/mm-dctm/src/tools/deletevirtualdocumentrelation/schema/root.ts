import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "nodeId": z.string().describe("The id of virtual document node, which is actually r_object_id of relation instance.")
}