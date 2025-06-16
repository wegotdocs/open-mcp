import { z } from "zod"

export const inputParamsSchema = {
  "organization_slug": z.string(),
  "workspace_slug": z.string(),
  "namespace_name": z.string(),
  "revision_reference": z.string().describe("Tag or digest"),
  "Accept": z.string()
}