import { z } from "zod"

export const toolName = `addshortlink`
export const toolDescription = `add a shortlink`
export const baseUrl = `https://apirest.isendpro.com/cgi-bin`
export const path = `/shortlink`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "keyid": z.string(), "shortlink": z.string() }).optional() }).shape