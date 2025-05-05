import { z } from "zod"

export const inputParamsSchema = {
  "observableId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "dataType": z.string().min(1).max(64).optional(),
  "message": z.string().max(1048576).optional(),
  "tlp": z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).optional(),
  "pap": z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]).optional(),
  "tags": z.array(z.string().min(1).max(128)).optional(),
  "ioc": z.boolean().optional(),
  "sighted": z.boolean().optional(),
  "sightedAt": z.number().int().optional(),
  "ignoreSimilarity": z.boolean().optional(),
  "addTags": z.array(z.string().min(1).max(128)).describe("Those tags will be added to the current observable").optional(),
  "removeTags": z.array(z.string().min(1).max(128)).describe("Those tags will be removed from the current observable").optional()
}