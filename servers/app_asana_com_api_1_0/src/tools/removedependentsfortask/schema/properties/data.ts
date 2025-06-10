import { z } from "zod"

export const inputParamsSchema = {
  "dependents": z.array(z.string()).describe("An array of task gids that are dependents of the given task.").optional()
}