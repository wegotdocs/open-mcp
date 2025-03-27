import { z } from "zod"

export const toolName = `deleteapplication`
export const toolDescription = `Destroy Application`
export const baseUrl = `https://api.nexmo.com/v1/applications`
export const path = `/{app_id}`
export const method = `delete`
export const security = []

export const inputParams = z.object({ "path": z.object({ "app_id": z.string().describe("The ID allocated to your application by Nexmo.") }).optional() }).shape