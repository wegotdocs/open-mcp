import { z } from "zod"

export const toolName = `createorupdatedashboard`
export const toolDescription = `Create or update a dashboard`
export const baseUrl = `/api`
export const path = `/v1/dashboards`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "addition",
    "charts",
    "dashboardType",
    "dataModels",
    "dataProducts",
    "description",
    "displayName",
    "domain",
    "extension",
    "name",
    "owner",
    "project",
    "service",
    "sourceUrl",
    "tags"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "addition": z.record(z.any()).optional(), "charts": z.array(z.string()).optional(), "dashboardType": z.enum(["Dashboard","Report"]).optional(), "dataModels": z.array(z.string()).optional(), "dataProducts": z.array(z.string()).optional(), "description": z.string().optional(), "displayName": z.string().optional(), "domain": z.string().min(1).max(3072).optional(), "extension": z.record(z.any()).optional(), "name": z.string().regex(new RegExp("^(?U)[\\w ()\\[\\]_\\-`.,%+—!?'\"/\\\\]+$")).min(1).max(1000), "owner": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional(), "project": z.string().optional(), "service": z.string().min(1).max(3072), "sourceUrl": z.string().optional(), "tags": z.array(z.object({ "description": z.string().optional(), "href": z.string().url().optional(), "labelType": z.enum(["Manual","Propagated","Automated","Derived"]), "source": z.enum(["Classification","Glossary"]), "state": z.enum(["Suggested","Confirmed"]), "tagFQN": z.string().min(0).max(3072) })).optional() }).shape