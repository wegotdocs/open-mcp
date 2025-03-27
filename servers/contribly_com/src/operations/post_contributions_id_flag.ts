import { z } from "zod"

export const toolName = `post_contributions_id_flag`
export const toolDescription = `Raise a flag against this contribution`
export const baseUrl = `https://api.contribly.com/1`
export const path = `/contributions/{id}/flag`
export const method = `post`
export const security = []

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the contribution to flag") }).optional(), "body": z.object({ "date": z.string().datetime({ offset: true }).optional(), "email": z.string().optional(), "id": z.string().optional(), "notes": z.string().optional(), "type": z.string().optional() }).optional() }).shape