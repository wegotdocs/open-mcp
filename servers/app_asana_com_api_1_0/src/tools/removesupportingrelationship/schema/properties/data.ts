import { z } from "zod"

export const inputParamsSchema = {
  "supporting_resource": z.string().describe("The gid of the supporting resource to remove from the parent goal. Must be the gid of a goal, project, task, or portfolio.")
}