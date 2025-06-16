import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The GitHub organization name"),
  "repo_name": z.string().describe("The GitHub repository name"),
  "target_name": z.string().describe("The target name for the action").optional(),
  "gen_lock_id": z.string().describe("The generation lock ID"),
  "set_version": z.string().describe("A version to override the SDK too in workflow dispatch").optional(),
  "force": z.boolean().describe("Force an SDK generation").optional()
}