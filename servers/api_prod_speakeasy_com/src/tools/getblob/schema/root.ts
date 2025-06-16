import { z } from "zod"

export const inputParamsSchema = {
  "organization_slug": z.string(),
  "workspace_slug": z.string(),
  "namespace_name": z.string(),
  "digest": z.string()
}