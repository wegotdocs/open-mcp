import { z } from "zod"

export const toolName = `createpermission`
export const toolDescription = `Create a permission.`
export const baseUrl = `https://api.sanity.io`
export const path = `/vX/access/{resourceType}/{resourceId}/permissions`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "resourceType",
    "resourceId"
  ],
  "cookie": [],
  "body": [
    "type",
    "name",
    "title",
    "description",
    "config"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"), "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."), "type": z.enum(["sanity.document.filter","sanity.document.filter.mode","sanity.organization","sanity.organization.legal","sanity.organization.members","sanity.organization.projects","sanity.organization.roles","sanity.organization.sso","sanity.organization.tokens","sanity.project","sanity.project.cors","sanity.project.datasets","sanity.project.graphql","sanity.project.members","sanity.project.roles","sanity.project.tags","sanity.project.tokens","sanity.project.usage","sanity.project.webhooks"]).describe("The resource for the permission."), "name": z.string().describe("The name of the permission resource. A unique identifier for a permission."), "title": z.string().describe("A human-readable title of the permission resource. This is used for display purposes."), "description": z.string().describe("The description of the permission resource."), "config": z.record(z.any()).describe("Some permissions allow for additional configuration when used with document permissions. Accepts a groq filter or a dataset name.").optional() }).shape