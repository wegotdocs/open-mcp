import { z } from "zod"

export const inputParamsSchema = {
  "labeled_runners": z.boolean().describe("Whether to use runners labeled with 'dependency-submission' or standard GitHub runners.").optional()
}