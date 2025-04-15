import { z } from "zod"

export const inputParams = {
  "idOrName": z.string().describe("The ID or name of the Project."),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "uid": z.string().max(256).describe("The ID of the team member that should be added to this project.").optional(),
  "username": z.string().max(256).describe("The username of the team member that should be added to this project.").optional(),
  "email": z.string().email().describe("The email of the team member that should be added to this project.").optional(),
  "role": z.enum(["ADMIN","PROJECT_DEVELOPER","PROJECT_VIEWER"]).describe("The project role of the member that will be added.")
}