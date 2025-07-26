import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this sonarqube_ issue_ transition."),
  "finding_status": z.string().min(1).max(100),
  "sonarqube_status": z.string().min(1).max(50),
  "transitions": z.string().min(1).max(100),
  "sonarqube_issue": z.number().int()
}