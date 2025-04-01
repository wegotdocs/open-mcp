import { z } from "zod"

export const toolName = `put_admin_realms_realm_authentication_flows_flowalias_executions`
export const toolDescription = `Update authentication executions of a Flow`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/flows/{flowAlias}/executions`
export const method = `put`
export const security = []

export const inputParams = z.object({ "path": z.object({ "flowAlias": z.string().describe("Flow alias") }).optional(), "body": z.object({ "id": z.string().optional(), "requirement": z.string().optional(), "displayName": z.string().optional(), "alias": z.string().optional(), "description": z.string().optional(), "requirementChoices": z.array(z.string()).optional(), "configurable": z.boolean().optional(), "authenticationFlow": z.boolean().optional(), "providerId": z.string().optional(), "authenticationConfig": z.string().optional(), "flowId": z.string().optional(), "level": z.number().int().optional(), "index": z.number().int().optional(), "priority": z.number().int().optional() }).optional() }).shape