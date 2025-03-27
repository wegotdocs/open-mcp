import { z } from "zod"

export const toolName = `post_contributions_id_moderate`
export const toolDescription = `Perform a moderation action on this contribution`
export const baseUrl = `https://api.contribly.com/1`
export const path = `/contributions/{id}/moderate`
export const method = `post`
export const security = []

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the contribution to moderate") }).optional(), "body": z.object({ "action": z.object({ "id": z.string(), "label": z.string(), "resultingState": z.object({ "id": z.string(), "label": z.string(), "public": z.boolean() }) }).optional(), "notes": z.string().optional() }).optional() }).shape