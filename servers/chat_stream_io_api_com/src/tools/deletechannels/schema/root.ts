import { z } from "zod"

export const inputParamsSchema = {
  "cids": z.array(z.string()).describe("All channels that should be deleted"),
  "hard_delete": z.boolean().describe("Specify if channels and all ressources should be hard deleted").optional()
}