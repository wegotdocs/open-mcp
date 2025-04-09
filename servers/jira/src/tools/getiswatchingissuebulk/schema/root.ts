import { z } from "zod"

export const inputParams = {
  "issueIds": z.array(z.string()).describe("The list of issue IDs.")
}