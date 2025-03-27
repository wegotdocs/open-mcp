import { z } from "zod"

export const toolName = `seeemailtemplateinformation`
export const toolDescription = `See Email Template Information`
export const baseUrl = `https://rest.iad-01.braze.com`
export const path = `/templates/email/info`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "email_template_id": z.string().describe("(Required) String\n\nYour email template's API Identifier.").optional() }).optional() }).shape