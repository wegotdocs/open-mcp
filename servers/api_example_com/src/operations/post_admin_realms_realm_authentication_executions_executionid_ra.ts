import { z } from "zod"

export const toolName = `post_admin_realms_realm_authentication_executions_executionid_ra`
export const toolDescription = `Raise execution's priority`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/executions/{executionId}/raise-priority`
export const method = `post`
export const security = []

export const inputParams = z.object({ "path": z.object({ "executionId": z.string().describe("Execution id") }).optional() }).shape