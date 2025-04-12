import { z } from "zod"

export const inputParams = {
  "id": z.number().int().describe("A unique integer value identifying this user.")
}