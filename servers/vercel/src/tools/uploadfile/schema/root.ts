import { z } from "zod"

export const inputParamsSchema = {
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "Content-Length": z.number().describe("The file size in bytes").optional(),
  "x-vercel-digest": z.string().max(40).describe("The file SHA1 used to check the integrity").optional(),
  "x-now-digest": z.string().max(40).describe("The file SHA1 used to check the integrity").optional(),
  "x-now-size": z.number().describe("The file size as an alternative to `Content-Length`").optional()
}