import { z } from "zod"

export const inputParamsSchema = {
  "formTypes": z.enum(["startform","tableform","all"]).describe("A comma-delimited list of form types to return. If not specified, only start forms are returned.").optional(),
  "User-Agent": z.string().optional(),
  "ntx-client": z.string().optional(),
  "ntx-correlation-id": z.string().optional(),
  "ntx-operation-id": z.string().optional(),
  "ntx-nm-last-modified": z.string().optional(),
  "ntx-tenancy": z.string(),
  "Authorization": z.string()
}