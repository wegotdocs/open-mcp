import { z } from "zod"

export const inputParamsSchema = {
  "domain": z.string().describe("The name of the domain."),
  "strict": z.enum(["true","false"]).describe("When true, the response will only include the nameservers assigned directly to the specified domain. When false and there are no nameservers assigned directly to the specified domain, the response will include the nameservers of the domain's parent zone.").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}