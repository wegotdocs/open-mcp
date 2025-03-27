import { z } from "zod"

export const toolName = `gethlr`
export const toolDescription = `Vérifier la validité d'un numéro`
export const baseUrl = `https://apirest.isendpro.com/cgi-bin`
export const path = `/hlr`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "getHLR": z.literal("1").describe("Doit valoir \"1\""), "keyid": z.string().describe("Clé API"), "num": z.array(z.string().describe("numéro au format national français ou international")).describe("liste de numéros de téléphone") }).optional() }).shape