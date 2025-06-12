import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "snapshotId": z.string().describe("The r_object_id of the associated snapshot.")
}