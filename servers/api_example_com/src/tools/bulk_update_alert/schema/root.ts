import { z } from "zod"

export const inputParamsSchema = {
  "ids": z.array(z.string().describe("The _id of the entity or its 'name' (depends of the entity)")),
  "type": z.string().min(1).max(32).optional(),
  "source": z.string().min(1).max(32).optional(),
  "sourceRef": z.string().min(1).max(128).optional(),
  "externalLink": z.string().min(1).max(512).optional(),
  "title": z.string().min(1).max(512).optional(),
  "description": z.string().max(1048576).optional(),
  "severity": z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).optional(),
  "date": z.number().int().optional(),
  "lastSyncDate": z.number().int().optional(),
  "tags": z.array(z.string().min(1).max(128)).optional(),
  "tlp": z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).optional(),
  "pap": z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]).optional(),
  "follow": z.boolean().optional(),
  "customFields": z.record(z.any()).optional(),
  "status": z.string().min(1).max(64).optional(),
  "summary": z.string().max(1048576).optional(),
  "assignee": z.string().min(1).max(128).optional(),
  "addTags": z.array(z.string().min(1).max(128)).describe("Those tags will be added to the current alert").optional(),
  "removeTags": z.array(z.string().min(1).max(128)).describe("Those tags will be removed from the current alert").optional()
}