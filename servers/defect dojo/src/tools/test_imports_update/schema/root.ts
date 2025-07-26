import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this test_ import."),
  "import_settings": z.any().nullable().optional(),
  "type": z.string().min(1).max(64).optional(),
  "version": z.string().max(100).nullable().optional(),
  "build_id": z.string().max(150).nullable().describe("Build ID that was tested, a reimport may update this field.").optional(),
  "commit_hash": z.string().max(150).nullable().describe("Commit hash tested, a reimport may update this field.").optional(),
  "branch_tag": z.string().max(150).nullable().describe("Tag or branch that was tested, a reimport may update this field.").optional()
}