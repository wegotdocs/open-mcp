import { z } from "zod"

export const toolName = `createorupdatestoredprocedure`
export const toolDescription = `Create or update Stored Procedure`
export const baseUrl = `/api`
export const path = `/v1/storedProcedures`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "addition",
    "dataProducts",
    "databaseSchema",
    "description",
    "displayName",
    "domain",
    "extension",
    "name",
    "owner",
    "sourceUrl",
    "storedProcedureCode",
    "storedProcedureType",
    "tags"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "addition": z.record(z.any()).optional(), "dataProducts": z.array(z.string()).optional(), "databaseSchema": z.string().min(1).max(3072).optional(), "description": z.string().optional(), "displayName": z.string().optional(), "domain": z.string().optional(), "extension": z.record(z.any()).optional(), "name": z.string().regex(new RegExp("^(?U)[\\w ()\\[\\]_\\-`.,%+—!?'\"/\\\\]+$")).min(1).max(128), "owner": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional(), "sourceUrl": z.string().optional(), "storedProcedureCode": z.object({ "code": z.string().optional(), "language": z.enum(["SQL","Java","JavaScript","Python","External","Unknown"]) }), "storedProcedureType": z.enum(["StoredProcedure","StoredPackage","UDF"]).optional(), "tags": z.array(z.object({ "description": z.string().optional(), "href": z.string().url().optional(), "labelType": z.enum(["Manual","Propagated","Automated","Derived"]), "source": z.enum(["Classification","Glossary"]), "state": z.enum(["Suggested","Confirmed"]), "tagFQN": z.string().min(0).max(3072) })).optional() }).shape