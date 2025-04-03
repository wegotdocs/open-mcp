import { z } from "zod"

export const toolName = `createorupdatemlmodel`
export const toolDescription = `Create or update an ML model`
export const baseUrl = `/api`
export const path = `/v1/mlmodels`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "addition",
    "algorithm",
    "dashboard",
    "dataProducts",
    "description",
    "displayName",
    "domain",
    "extension",
    "mlFeatures",
    "mlHyperParameters",
    "mlStore",
    "name",
    "owner",
    "server",
    "service",
    "tags",
    "target"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "addition": z.record(z.any()).optional(), "algorithm": z.string(), "dashboard": z.string().min(1).max(3072).optional(), "dataProducts": z.array(z.string()).optional(), "description": z.string().optional(), "displayName": z.string().optional(), "domain": z.string().optional(), "extension": z.record(z.any()).optional(), "mlFeatures": z.array(z.object({ "dataType": z.enum(["numerical","categorical"]).optional(), "description": z.string().optional(), "featureAlgorithm": z.string().optional(), "featureSources": z.array(z.object({ "dataSource": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional(), "dataType": z.enum(["integer","number","string","array","date","timestamp","object","boolean"]).optional(), "description": z.string().optional(), "fullyQualifiedName": z.string().min(1).max(3072).optional(), "name": z.string().regex(new RegExp("^(?U)[\\w ()\\[\\]_\\-`.,%+—!?'\"/\\\\]+$")).min(1).max(128).optional(), "tags": z.array(z.object({ "description": z.string().optional(), "href": z.string().url().optional(), "labelType": z.enum(["Manual","Propagated","Automated","Derived"]), "source": z.enum(["Classification","Glossary"]), "state": z.enum(["Suggested","Confirmed"]), "tagFQN": z.string().min(0).max(3072) })).optional() })).optional(), "fullyQualifiedName": z.string().min(1).max(3072).optional(), "name": z.string().regex(new RegExp("^(?U)[\\w ()\\[\\]_\\-`.,%+—!?'\"/\\\\]+$")).min(1).max(128).optional(), "tags": z.array(z.object({ "description": z.string().optional(), "href": z.string().url().optional(), "labelType": z.enum(["Manual","Propagated","Automated","Derived"]), "source": z.enum(["Classification","Glossary"]), "state": z.enum(["Suggested","Confirmed"]), "tagFQN": z.string().min(0).max(3072) })).optional(), "userDescription": z.string().optional() })).optional(), "mlHyperParameters": z.array(z.object({ "description": z.string().optional(), "name": z.string().optional(), "value": z.string().optional() })).optional(), "mlStore": z.object({ "imageRepository": z.string().url().optional(), "storage": z.string().url().optional() }).optional(), "name": z.string().regex(new RegExp("^(?U)[\\w ()\\[\\]_\\-`.,%+—!?'\"/\\\\]+$")).min(1).max(128), "owner": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional(), "server": z.string().url().optional(), "service": z.string().min(1).max(3072), "tags": z.array(z.object({ "description": z.string().optional(), "href": z.string().url().optional(), "labelType": z.enum(["Manual","Propagated","Automated","Derived"]), "source": z.enum(["Classification","Glossary"]), "state": z.enum(["Suggested","Confirmed"]), "tagFQN": z.string().min(0).max(3072) })).optional(), "target": z.string().regex(new RegExp("^(?U)[\\w ()\\[\\]_\\-`.,%+—!?'\"/\\\\]+$")).min(1).max(128).optional() }).shape