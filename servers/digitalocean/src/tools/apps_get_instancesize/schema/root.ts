import { z } from "zod"

export const inputParams = {
  "slug": z.string().describe("The slug of the instance size")
}