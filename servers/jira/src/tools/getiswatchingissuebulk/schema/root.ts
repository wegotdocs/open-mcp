import { z } from "zod"

export const inputParamsSchema = {
  "issueIds": z.array(z.string()).describe("The list of issue IDs.")
}