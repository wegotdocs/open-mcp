import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "job_id": z.number().int().describe("The unique identifier of the job."),
  "enable_debug_logging": z.boolean().describe("Whether to enable debug logging for the re-run.").optional()
}