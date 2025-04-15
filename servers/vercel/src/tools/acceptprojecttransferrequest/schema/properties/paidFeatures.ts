import { z } from "zod"

export const inputParamsSchema = {
  "concurrentBuilds": z.number().int().nullable().optional(),
  "passwordProtection": z.boolean().nullable().optional(),
  "previewDeploymentSuffix": z.boolean().nullable().optional()
}