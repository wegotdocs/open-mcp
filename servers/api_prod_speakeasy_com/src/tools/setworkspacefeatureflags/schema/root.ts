import { z } from "zod"

export const inputParamsSchema = {
  "feature_flags": z.array(z.enum(["schema_registry","changes_report","skip_schema_registry","webhooks"]).describe("enum value workspace feature flag"))
}