import { z } from "zod"

export const inputParamsSchema = {
  "projectId": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "domain": z.string().regex(new RegExp("([a-z]+[a-z.]+)$")).max(2544).optional(),
  "projectScope": z.boolean().describe("If the specified bypass will apply to all domains for a project.").optional(),
  "sourceIp": z.string().optional(),
  "allSources": z.boolean().optional(),
  "ttl": z.number().describe("Time to live in milliseconds").optional(),
  "note": z.string().max(500).optional()
}