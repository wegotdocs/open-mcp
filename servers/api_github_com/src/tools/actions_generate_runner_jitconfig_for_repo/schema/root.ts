import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "name": z.string().describe("The name of the new runner."),
  "runner_group_id": z.number().int().describe("The ID of the runner group to register the runner to."),
  "labels": z.array(z.string()).min(1).max(100).describe("The names of the custom labels to add to the runner. **Minimum items**: 1. **Maximum items**: 100."),
  "work_folder": z.string().describe("The working directory to be used for job execution, relative to the runner install directory.").optional()
}