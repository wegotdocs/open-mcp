import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "objectId": z.string().describe("The r_object_id of required sysobject."),
  "aspectName": z.string().describe("The name of the aspect.")
}