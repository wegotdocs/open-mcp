import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The GitHub organization name"),
  "repo": z.string().describe("The GitHub repository name"),
  "subdirectory": z.string().describe("The subdirectory (location of mint.json)").optional(),
  "input": z.string().describe("The input OpenAPI document"),
  "overlays": z.array(z.string()).describe("The overlays to apply")
}