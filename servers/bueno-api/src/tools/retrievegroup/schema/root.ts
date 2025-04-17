import { z } from "zod"

export const inputParamsSchema = {
  "equipGroupId": z.string().uuid().describe("Unique identifier of a Group")
}