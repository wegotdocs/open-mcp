import { z } from "zod"

export const inputParamsSchema = {
  "Active": z.boolean().optional(),
  "FullyQualifiedName": z.string().optional(),
  "Id": z.string().optional(),
  "Name": z.string().optional(),
  "SubDepartment": z.boolean().optional(),
  "SyncToken": z.string().optional(),
  "domain": z.string().optional(),
  "sparse": z.boolean().optional()
}