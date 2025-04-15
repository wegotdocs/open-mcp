import { z } from "zod"

export const inputParams = {
  "hash": z.string().describe("The artifact hash"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "x-artifact-client-ci": z.string().max(50).describe("The continuous integration or delivery environment where this artifact is downloaded.").optional(),
  "x-artifact-client-interactive": z.number().int().gte(0).lte(1).describe("1 if the client is an interactive shell. Otherwise 0").optional()
}