import { z } from "zod"

export const inputParamsSchema = {
  "finding_status": z.string().optional(),
  "id": z.number().int().optional(),
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "sonarqube_issue": z.number().int().optional(),
  "sonarqube_status": z.string().optional(),
  "transitions": z.string().optional()
}