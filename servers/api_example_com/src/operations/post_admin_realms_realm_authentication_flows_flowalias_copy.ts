import { z } from "zod"

export const toolName = `post_admin_realms_realm_authentication_flows_flowalias_copy`
export const toolDescription = `Copy existing authentication flow under a new name The new name is given as 'newName' attribute of the passed JSON object`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/flows/{flowAlias}/copy`
export const method = `post`
export const security = []

export const inputParams = z.object({ "path": z.object({ "flowAlias": z.string().describe("name of the existing authentication flow") }).optional(), "body": z.record(z.string()).optional() }).shape