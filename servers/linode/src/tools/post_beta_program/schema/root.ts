import { z } from "zod"

export const inputParams = {
  "id": z.string().describe("The unique identifier of the Beta Program.")
}