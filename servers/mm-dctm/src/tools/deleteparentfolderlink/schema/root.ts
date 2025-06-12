import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "objectId": z.string().describe("The r_object_id of required sysobject."),
  "parentFolderId": z.string().describe("The r_object_id of parent folder for the object.")
}