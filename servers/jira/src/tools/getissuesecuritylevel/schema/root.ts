import { z } from "zod"

export const inputParams = {
  "id": z.string().describe("The ID of the issue security level.")
}