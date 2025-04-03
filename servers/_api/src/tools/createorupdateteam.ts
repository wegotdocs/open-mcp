import { z } from "zod"

export const toolName = `createorupdateteam`
export const toolDescription = `Update team`
export const baseUrl = `/api`
export const path = `/v1/teams`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "addition",
    "children",
    "dataProducts",
    "defaultRoles",
    "description",
    "displayName",
    "domain",
    "email",
    "extension",
    "isJoinable",
    "name",
    "owner",
    "parents",
    "policies",
    "profile",
    "teamType",
    "users"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "addition": z.record(z.any()).optional(), "children": z.array(z.string().uuid()).optional(), "dataProducts": z.array(z.string()).optional(), "defaultRoles": z.array(z.string().uuid()).optional(), "description": z.string().optional(), "displayName": z.string().optional(), "domain": z.string().optional(), "email": z.string().regex(new RegExp("^[\\S.!#$%&’*+/=?^_`{|}~-]+@\\S+\\.\\S+$")).min(6).max(127).optional(), "extension": z.record(z.any()).optional(), "isJoinable": z.boolean().optional(), "name": z.string().regex(new RegExp("^(?U)[\\w ()\\[\\]_\\-`.,%+—!?'\"/\\\\]+$")).min(1).max(128), "owner": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional(), "parents": z.array(z.string().uuid()).optional(), "policies": z.array(z.string().uuid()).optional(), "profile": z.object({ "images": z.object({ "image": z.string().url().optional(), "image192": z.string().url().optional(), "image24": z.string().url().optional(), "image32": z.string().url().optional(), "image48": z.string().url().optional(), "image512": z.string().url().optional(), "image72": z.string().url().optional() }).optional(), "subscription": z.object({ "gChat": z.object({ "endpoint": z.string().url().optional(), "roles": z.array(z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() })).optional(), "secretKey": z.string().optional(), "sendToAdmins": z.boolean().optional(), "sendToFollowers": z.boolean().optional(), "sendToOwners": z.boolean().optional() }).optional(), "generic": z.object({ "endpoint": z.string().url().optional(), "roles": z.array(z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() })).optional(), "secretKey": z.string().optional(), "sendToAdmins": z.boolean().optional(), "sendToFollowers": z.boolean().optional(), "sendToOwners": z.boolean().optional() }).optional(), "msTeams": z.object({ "endpoint": z.string().url().optional(), "roles": z.array(z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() })).optional(), "secretKey": z.string().optional(), "sendToAdmins": z.boolean().optional(), "sendToFollowers": z.boolean().optional(), "sendToOwners": z.boolean().optional() }).optional(), "slack": z.object({ "endpoint": z.string().url().optional(), "roles": z.array(z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() })).optional(), "secretKey": z.string().optional(), "sendToAdmins": z.boolean().optional(), "sendToFollowers": z.boolean().optional(), "sendToOwners": z.boolean().optional() }).optional() }).optional() }).optional(), "teamType": z.enum(["Group","Department","Division","BusinessUnit","Organization"]), "users": z.array(z.string().uuid()).optional() }).shape