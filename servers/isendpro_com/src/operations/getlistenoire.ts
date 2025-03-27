import { z } from "zod"

export const toolName = `getlistenoire`
export const toolDescription = `Retourne le liste noire`
export const baseUrl = `https://apirest.isendpro.com/cgi-bin`
export const path = `/getlistenoire`
export const method = `post`
export const security = []

export const inputParams = z.object({ "query": z.object({ "keyid": z.string().describe("Clé API"), "getListeNoire": z.literal("1").describe("Doit valoir \"1\"") }).optional() }).shape