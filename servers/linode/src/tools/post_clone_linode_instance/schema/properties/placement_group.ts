import { z } from "zod"

export const inputParams = {
  "id": z.number().int().describe("The placement group's ID. You need to provide it for all operations that affect it.")
}