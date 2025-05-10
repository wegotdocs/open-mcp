import { z } from "zod"

export const inputParams = {
  "team": z.string().describe("The ID of the team"),
  "list": z.string().describe("The ID of the list"),
  "name": z.string().max(255).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "is_private": z.boolean().optional(),
  "webhook_url": z.union([z.string().url(), z.null()]).optional(),
  "webhook_active": z.boolean().optional()
}