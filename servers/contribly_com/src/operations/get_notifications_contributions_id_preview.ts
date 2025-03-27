import { z } from "zod"

export const toolName = `get_notifications_contributions_id_preview`
export const toolDescription = ``
export const baseUrl = `https://api.contribly.com/1`
export const path = `/notifications/contributions/{id}/preview`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the contribution to preview a notification for") }).optional(), "query": z.object({ "message": z.string().describe("Type of message to preview.") }).optional() }).shape