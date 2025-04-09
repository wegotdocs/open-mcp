import { z } from "zod"

export const inputParams = {
  "alias": z.string().describe("Alias of required action")
}