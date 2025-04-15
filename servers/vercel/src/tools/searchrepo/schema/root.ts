import { z } from "zod"

export const inputParamsSchema = {
  "query": z.string().optional(),
  "namespaceId": z.union([z.string(), z.number()]).nullable().optional(),
  "provider": z.enum(["github","github-custom-host","gitlab","bitbucket"]).optional(),
  "installationId": z.string().optional(),
  "host": z.string().describe("The custom Git host if using a custom Git provider, like GitHub Enterprise Server").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}