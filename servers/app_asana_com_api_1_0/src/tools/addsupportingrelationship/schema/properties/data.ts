import { z } from "zod"

export const inputParamsSchema = {
  "supporting_resource": z.string().describe("The gid of the supporting resource to add to the parent goal. Must be the gid of a goal, project, task, or portfolio."),
  "insert_before": z.string().describe("An id of a subgoal of this parent goal. The new subgoal will be added before the one specified here. `insert_before` and `insert_after` parameters cannot both be specified. Currently only supported when adding a subgoal.").optional(),
  "insert_after": z.string().describe("An id of a subgoal of this parent goal. The new subgoal will be added after the one specified here. `insert_before` and `insert_after` parameters cannot both be specified. Currently only supported when adding a subgoal.").optional(),
  "contribution_weight": z.number().describe("The weight that the supporting resource's progress will contribute to the supported goal's progress. This can be 0, 1, or any value in between.").optional()
}