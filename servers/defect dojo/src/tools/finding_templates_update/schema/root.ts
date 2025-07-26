import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this finding_ template."),
  "tags": z.array(z.string().min(1)).optional(),
  "vulnerability_ids": z.array(z.object({ "vulnerability_id": z.string().min(1).max(50) })).optional(),
  "title": z.string().min(1).max(1000),
  "cwe": z.number().int().gte(-2147483648).lte(2147483647).nullable().optional(),
  "cvssv3": z.string().min(1).max(117).nullable().describe("Common Vulnerability Scoring System version 3 (CVSSv3) score associated with this finding.").optional(),
  "severity": z.string().max(200).nullable().optional(),
  "description": z.string().nullable().optional(),
  "mitigation": z.string().nullable().optional(),
  "impact": z.string().nullable().optional(),
  "references": z.string().nullable().optional(),
  "template_match": z.boolean().describe("Enables this template for matching remediation advice. Match will be applied to all active, verified findings by CWE.").optional(),
  "template_match_title": z.boolean().describe("Matches by title text (contains search) and CWE.").optional()
}