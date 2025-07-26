import { z } from "zod"

export const inputParamsSchema = {
  "finding_status": z.string().min(1).max(100),
  "sonarqube_status": z.string().min(1).max(50),
  "transitions": z.string().min(1).max(100),
  "sonarqube_issue": z.number().int()
}