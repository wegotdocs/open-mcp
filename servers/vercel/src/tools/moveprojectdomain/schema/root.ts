import { z } from "zod"

export const inputParamsSchema = {
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "domain": z.string().describe("The project domain name"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "projectId": z.string().describe("The unique target project identifier")
}