import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the deployment the aliases should be listed for"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "alias": z.string().describe("The alias we want to assign to the deployment defined in the URL").optional(),
  "redirect": z.string().nullable().describe("The redirect property will take precedence over the deployment id from the URL and consists of a hostname (like test.com) to which the alias should redirect using status code 307").optional()
}