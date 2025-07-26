import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this sonarqube_ issue."),
  "key": z.string().min(1).max(60).describe("SonarQube issue key").optional(),
  "status": z.string().min(1).max(20).describe("SonarQube issue status").optional(),
  "type": z.string().min(1).max(20).describe("SonarQube issue type").optional()
}