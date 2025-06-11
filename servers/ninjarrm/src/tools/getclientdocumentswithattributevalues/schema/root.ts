import { z } from "zod"

export const inputParamsSchema = {
  "groupBy": z.enum(["TEMPLATE","ORGANIZATION"]).optional(),
  "organizationIds": z.string().optional(),
  "templateIds": z.string().optional(),
  "templateName": z.string().optional(),
  "documentName": z.string().optional()
}