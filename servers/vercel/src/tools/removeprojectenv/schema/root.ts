import { z } from "zod"

export const inputParams = {
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "id": z.string().describe("The unique environment variable identifier"),
  "customEnvironmentId": z.string().describe("The unique custom environment identifier within the project").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}