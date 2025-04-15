import { z } from "zod"

export const inputParamsSchema = {
  "integrationConfigurationId": z.string(),
  "resourceId": z.string(),
  "itemId": z.string(),
  "slug": z.string().max(1024),
  "origin": z.string().max(2048),
  "name": z.string().max(1024).optional(),
  "category": z.enum(["experiment","flag"]).optional(),
  "description": z.string().max(1024).optional(),
  "isArchived": z.boolean().optional(),
  "createdAt": z.number().optional(),
  "updatedAt": z.number().optional()
}