import { z } from "zod"

export const inputParamsSchema = {
  "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."),
  "include_groups": z.array(z.string()).describe("An array of check groups that will be run when clusterlint executes checks.").optional(),
  "include_checks": z.array(z.string()).describe("An array of checks that will be run when clusterlint executes checks.").optional(),
  "exclude_groups": z.array(z.string()).describe("An array of check groups that will be omitted when clusterlint executes checks.").optional(),
  "exclude_checks": z.array(z.string()).describe("An array of checks that will be run when clusterlint executes checks.").optional()
}