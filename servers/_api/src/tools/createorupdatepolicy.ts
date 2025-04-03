import { z } from "zod"

export const toolName = `createorupdatepolicy`
export const toolDescription = `Create or update a policy`
export const baseUrl = `/api`
export const path = `/v1/policies`
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
    "description",
    "displayName",
    "domain",
    "enabled",
    "extension",
    "location",
    "name",
    "owner",
    "rules"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "addition": z.record(z.any()).optional(), "dataProducts": z.array(z.string()).optional(), "description": z.string().optional(), "displayName": z.string().optional(), "domain": z.string().optional(), "enabled": z.boolean().optional(), "extension": z.record(z.any()).optional(), "location": z.string().uuid().optional(), "name": z.string().regex(new RegExp("^(?U)[\\w ()\\[\\]_\\-`.,%+—!?'\"/\\\\]+$")).min(1).max(128), "owner": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional(), "rules": z.array(z.object({ "condition": z.string().optional(), "description": z.string().optional(), "effect": z.enum(["allow","deny"]), "fullyQualifiedName": z.string().min(1).max(3072).optional(), "name": z.string(), "operations": z.array(z.enum(["All","Create","Delete","ViewAll","ViewBasic","ViewUsage","ViewTests","ViewQueries","ViewDataProfile","ViewSampleData","EditAll","EditCustomFields","EditDataProfile","EditDescription","EditDisplayName","EditLineage","EditPolicy","EditOwner","EditQueries","EditReviewers","EditRole","EditSampleData","EditStatus","EditTags","EditTeams","EditTier","EditTests","EditUsage","EditUsers"])), "resources": z.array(z.string()) })) }).shape