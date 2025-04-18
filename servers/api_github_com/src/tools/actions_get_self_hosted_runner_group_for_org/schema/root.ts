import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "runner_group_id": z.number().int().describe("Unique identifier of the self-hosted runner group.")
}