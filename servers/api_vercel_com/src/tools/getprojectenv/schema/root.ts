import { z } from "zod"

export const inputParams = {
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "id": z.string().describe("The unique ID for the environment variable to get the decrypted value."),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}