import { z } from "zod"

export const inputParamsSchema = {
  "runner_type": z.enum(["standard","labeled","not_set"]).describe("Whether to use labeled runners or standard GitHub runners.").optional(),
  "runner_label": z.string().nullable().describe("The label of the runner to use for code scanning default setup when runner_type is 'labeled'.").optional()
}