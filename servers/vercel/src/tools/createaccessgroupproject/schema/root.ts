import { z } from "zod"

export const inputParams = {
  "accessGroupIdOrName": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "projectId": z.string().max(256).describe("The ID of the project."),
  "role": z.enum(["ADMIN","PROJECT_VIEWER","PROJECT_DEVELOPER"]).describe("The project role that will be added to this Access Group.")
}