import { z } from "zod"

export const toolName = `parameters_admin_realms_realm_authentication_flows_flowalias_exe`
export const toolDescription = ``
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/flows/{flowAlias}/executions/flow`
export const method = `parameters`
export const security = []

export const inputParams = z.object({}).shape