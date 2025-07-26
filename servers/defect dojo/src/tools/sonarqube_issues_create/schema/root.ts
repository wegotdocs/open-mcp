import { z } from "zod"

export const inputParamsSchema = {
  "key": z.string().min(1).max(60).describe("SonarQube issue key"),
  "status": z.string().min(1).max(20).describe("SonarQube issue status"),
  "type": z.string().min(1).max(20).describe("SonarQube issue type")
}