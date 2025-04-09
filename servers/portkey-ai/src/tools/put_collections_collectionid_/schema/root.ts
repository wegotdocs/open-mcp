import { z } from "zod"

export const inputParams = {
  "name": z.string().describe("New name for the collection")
}