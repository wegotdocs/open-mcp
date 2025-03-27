import { z } from "zod"

export const toolName = `post_form_responses`
export const toolDescription = `Submit a response to a form`
export const baseUrl = `https://api.contribly.com/1`
export const path = `/form-responses`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "contribution": z.string().optional(), "form": z.string().optional(), "responses": z.record(z.string()).optional() }).optional() }).shape