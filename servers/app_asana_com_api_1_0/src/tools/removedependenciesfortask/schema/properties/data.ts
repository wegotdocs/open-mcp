import { z } from "zod"

export const inputParamsSchema = {
  "dependencies": z.array(z.string()).describe("An array of task gids that a task depends on.").optional()
}