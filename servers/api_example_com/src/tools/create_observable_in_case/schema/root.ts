import { z } from "zod"

export const inputParamsSchema = {
  "caseId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "dataType": z.string().describe("allow to set the dataType from the query parameters").optional(),
  "b_dataType": z.string().min(1).max(64),
  "data": z.array(z.string().min(1).max(4096)).describe("Either `data` or `attachment` must be set depending on the dataType").optional(),
  "message": z.string().max(1048576).optional(),
  "startDate": z.number().int().optional(),
  "attachment": z.object({ "name": z.string().min(1).max(128), "contentType": z.string().min(1).max(128), "id": z.string().min(1).max(128) }).describe("existing attachment in TheHive").describe("Attachment must be set if the observable `dataType` has `isAttachment=true`").optional(),
  "tlp": z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).optional(),
  "pap": z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]).optional(),
  "tags": z.array(z.string().min(1).max(128)).optional(),
  "ioc": z.boolean().optional(),
  "sighted": z.boolean().optional(),
  "sightedAt": z.number().int().optional(),
  "ignoreSimilarity": z.boolean().optional(),
  "isZip": z.boolean().describe("If set to true, the file is unzipped using the `zipPassword` and each file in the zip is treated as an observable").optional(),
  "zipPassword": z.string().min(1).max(512).optional()
}