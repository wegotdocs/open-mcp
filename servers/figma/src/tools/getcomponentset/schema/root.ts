import { z } from "zod"

export const inputParamsSchema = {
  "key": z.string().describe("The unique identifier of the component set.")
}