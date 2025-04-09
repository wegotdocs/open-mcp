import { z } from "zod"

export const inputParams = {
  "key": z.string().describe("The unique identifier of the component set.")
}