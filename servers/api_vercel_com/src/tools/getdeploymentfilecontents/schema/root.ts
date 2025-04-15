import { z } from "zod"

export const inputParams = {
  "id": z.string().describe("The unique deployment identifier"),
  "fileId": z.string().describe("The unique file identifier"),
  "path": z.string().describe("Path to the file to fetch (only for Git deployments)").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}