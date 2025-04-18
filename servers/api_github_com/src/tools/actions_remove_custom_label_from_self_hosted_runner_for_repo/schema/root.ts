import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "runner_id": z.number().int().describe("Unique identifier of the self-hosted runner."),
  "name": z.string().describe("The name of a self-hosted runner's custom label.")
}