import { z } from "zod"

export const inputParamsSchema = {
  "type": z.string().min(1).max(32),
  "source": z.string().min(1).max(32),
  "sourceRef": z.string().min(1).max(128),
  "externalLink": z.string().min(1).max(512).optional(),
  "title": z.string().min(1).max(512),
  "description": z.string().max(1048576),
  "severity": z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).optional(),
  "date": z.number().int().optional(),
  "tags": z.array(z.string().min(1).max(128)).optional(),
  "flag": z.boolean().optional(),
  "tlp": z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).optional(),
  "pap": z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]).optional(),
  "customFields": z.record(z.any()).optional(),
  "summary": z.string().max(1048576).optional(),
  "status": z.string().min(1).max(64).optional(),
  "assignee": z.string().min(1).max(128).describe("User to assign the alert to").optional(),
  "caseTemplate": z.string().min(1).max(128).optional(),
  "observables": z.array(z.object({ "dataType": z.string().min(1).max(64), "data": z.array(z.string().min(1).max(4096)).describe("Either `data` or `attachment` must be set depending on the dataType").optional(), "message": z.string().max(1048576).optional(), "startDate": z.number().int().optional(), "attachment": z.object({ "name": z.string().min(1).max(128), "contentType": z.string().min(1).max(128), "id": z.string().min(1).max(128) }).describe("existing attachment in TheHive").describe("Attachment must be set if the observable `dataType` has `isAttachment=true`").optional(), "tlp": z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]), "pap": z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]), "tags": z.array(z.string().min(1).max(128)).optional(), "ioc": z.boolean(), "sighted": z.boolean(), "sightedAt": z.number().int().optional(), "ignoreSimilarity": z.boolean(), "isZip": z.boolean().describe("If set to true, the file is unzipped using the `zipPassword` and each file in the zip is treated as an observable").optional(), "zipPassword": z.string().min(1).max(512).optional() })).optional(),
  "procedures": z.array(z.object({ "patternId": z.string().min(1).max(128).describe("Id of the technique in the catalog"), "occurDate": z.number().int(), "tactic": z.string().min(1).max(32).describe("Name of the tactic, useful if the technique belongs to several tactics").optional(), "description": z.string().max(1048576).optional() })).describe("List of procedures (TTPs) to link the alert to").optional()
}