import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this test."),
  "tags": z.array(z.string().min(1)).optional(),
  "scan_type": z.string().min(1).nullable().optional(),
  "title": z.string().max(255).nullable().optional(),
  "description": z.string().nullable().optional(),
  "target_start": z.string().datetime({ offset: true }),
  "target_end": z.string().datetime({ offset: true }),
  "percent_complete": z.number().int().gte(-2147483648).lte(2147483647).nullable().optional(),
  "version": z.string().max(100).nullable().optional(),
  "build_id": z.string().max(150).nullable().describe("Build ID that was tested, a reimport may update this field.").optional(),
  "commit_hash": z.string().max(150).nullable().describe("Commit hash tested, a reimport may update this field.").optional(),
  "branch_tag": z.string().max(150).nullable().describe("Tag or branch that was tested, a reimport may update this field.").optional(),
  "lead": z.number().int().nullable().optional(),
  "test_type": z.number().int(),
  "environment": z.number().int().nullable().optional(),
  "api_scan_configuration": z.number().int().nullable().optional()
}