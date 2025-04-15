import { z } from "zod"

export const inputParamsSchema = {
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "upsert": z.string().describe("Allow override of environment variable if it already exists").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}