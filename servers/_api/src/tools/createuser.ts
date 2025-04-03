import { z } from "zod"

export const toolName = `createuser`
export const toolDescription = `Create a user`
export const baseUrl = `/api`
export const path = `/v1/users`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "addition",
    "authenticationMechanism",
    "botName",
    "confirmPassword",
    "createPasswordType",
    "dataProducts",
    "description",
    "displayName",
    "domain",
    "email",
    "extension",
    "isAdmin",
    "isBot",
    "name",
    "owner",
    "password",
    "profile",
    "roles",
    "teams",
    "timezone"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "addition": z.record(z.any()).optional(), "authenticationMechanism": z.object({ "authType": z.enum(["JWT","SSO","BASIC"]).optional(), "config": z.record(z.any()).optional() }).optional(), "botName": z.string().optional(), "confirmPassword": z.string().optional(), "createPasswordType": z.enum(["ADMIN_CREATE","USER_CREATE"]).optional(), "dataProducts": z.array(z.string()).optional(), "description": z.string().optional(), "displayName": z.string().optional(), "domain": z.string().optional(), "email": z.string().regex(new RegExp("^[\\S.!#$%&’*+/=?^_`{|}~-]+@\\S+\\.\\S+$")).min(6).max(127), "extension": z.record(z.any()).optional(), "isAdmin": z.boolean().optional(), "isBot": z.boolean().optional(), "name": z.string().regex(new RegExp("^(?U)[\\w\\-.]+$")).min(1).max(64), "owner": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional(), "password": z.string().optional(), "profile": z.object({ "images": z.object({ "image": z.string().url().optional(), "image192": z.string().url().optional(), "image24": z.string().url().optional(), "image32": z.string().url().optional(), "image48": z.string().url().optional(), "image512": z.string().url().optional(), "image72": z.string().url().optional() }).optional(), "subscription": z.object({ "gChat": z.object({ "endpoint": z.string().url().optional(), "roles": z.array(z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() })).optional(), "secretKey": z.string().optional(), "sendToAdmins": z.boolean().optional(), "sendToFollowers": z.boolean().optional(), "sendToOwners": z.boolean().optional() }).optional(), "generic": z.object({ "endpoint": z.string().url().optional(), "roles": z.array(z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() })).optional(), "secretKey": z.string().optional(), "sendToAdmins": z.boolean().optional(), "sendToFollowers": z.boolean().optional(), "sendToOwners": z.boolean().optional() }).optional(), "msTeams": z.object({ "endpoint": z.string().url().optional(), "roles": z.array(z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() })).optional(), "secretKey": z.string().optional(), "sendToAdmins": z.boolean().optional(), "sendToFollowers": z.boolean().optional(), "sendToOwners": z.boolean().optional() }).optional(), "slack": z.object({ "endpoint": z.string().url().optional(), "roles": z.array(z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() })).optional(), "secretKey": z.string().optional(), "sendToAdmins": z.boolean().optional(), "sendToFollowers": z.boolean().optional(), "sendToOwners": z.boolean().optional() }).optional() }).optional() }).optional(), "roles": z.array(z.string().uuid()).optional(), "teams": z.array(z.string().uuid()).optional(), "timezone": z.string().optional() }).shape