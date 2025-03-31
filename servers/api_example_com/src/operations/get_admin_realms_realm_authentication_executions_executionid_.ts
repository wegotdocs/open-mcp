import { z } from "zod"

export const toolName = `get_admin_realms_realm_authentication_executions_executionid_`
export const toolDescription = `Get Single Execution`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/executions/{executionId}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "executionId": z.string() }).optional() }).shape