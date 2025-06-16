import { z } from "zod"

export const inputParamsSchema = {
  "source_revision_digest": z.string().describe("Unique identifier of the source revision digest.").optional(),
  "lint_report_digest": z.string().describe("Unique identifier of the lint report digest.").optional(),
  "openapi_diff_report_digest": z.string().describe("Unique identifier of the openapi diff report digest.").optional(),
  "interaction_type": z.enum(["CI_EXEC","CLI_EXEC","LINT","OPENAPI_DIFF","TARGET_GENERATE","TOMBSTONE","AUTHENTICATE","QUICKSTART","RUN","CONFIGURE","PUBLISH","TEST"]).describe("Type of interaction.").optional(),
  "generate_gen_lock_id": z.string().describe("A specific gen lock ID for the events.").optional(),
  "execution_id": z.string().describe("Shared execution ID for cli events across a single action.").optional(),
  "success": z.boolean().describe("Whether the event was successful or not.").optional(),
  "limit": z.number().int().describe("Number of results to return.").optional()
}