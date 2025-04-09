import { z } from "zod"

export const inputParams = {
  "name": z.string().describe("The name of the secret."),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "b_name": z.string().describe("The name of the new secret.")
}