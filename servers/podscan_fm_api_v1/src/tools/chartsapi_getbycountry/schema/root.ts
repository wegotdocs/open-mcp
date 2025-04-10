import { z } from "zod"

export const inputParams = {
  "countryCode": z.string().describe("The 2-letter country code")
}