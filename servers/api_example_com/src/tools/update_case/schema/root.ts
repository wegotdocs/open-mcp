import { z } from "zod"

export const inputParamsSchema = {
  "idOrName": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "title": z.string().min(1).max(512).optional(),
  "description": z.string().max(1048576).optional(),
  "severity": z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).optional(),
  "startDate": z.number().int().optional(),
  "endDate": z.number().int().optional(),
  "tags": z.array(z.string().min(1).max(128)).describe("Set the case tags to this array").optional(),
  "flag": z.boolean().optional(),
  "tlp": z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).optional(),
  "pap": z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]).optional(),
  "status": z.string().min(1).max(64).optional(),
  "summary": z.string().max(1048576).optional(),
  "assignee": z.string().min(1).max(128).optional(),
  "impactStatus": z.string().min(1).max(128).optional(),
  "customFields": z.record(z.any()).optional(),
  "taskRule": z.string().min(1).max(128).optional(),
  "observableRule": z.string().min(1).max(128).optional(),
  "addTags": z.array(z.string().min(1).max(128)).describe("Those tags will be added to the current case").optional(),
  "removeTags": z.array(z.string().min(1).max(128)).describe("Those tags will be removed from the current case").optional()
}