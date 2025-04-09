import { z } from "zod"

export const inputParams = {
  "name": z.string().describe("The name of the domain for which the price needs to be checked."),
  "type": z.enum(["new","renewal","transfer","redemption"]).describe("In which status of the domain the price needs to be checked.").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}