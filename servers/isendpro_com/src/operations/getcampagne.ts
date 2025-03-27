import { z } from "zod"

export const toolName = `getcampagne`
export const toolDescription = `Retourne les SMS envoyés sur une période donnée`
export const baseUrl = `https://apirest.isendpro.com/cgi-bin`
export const path = `/campagne`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "keyid": z.string().describe("Clé API"), "rapportCampagne": z.literal("1").describe("Doit valoir \"1\""), "date_deb": z.string().describe("date de debut au format YYYY-MM-DD hh:mm"), "date_fin": z.string().describe("date de fin au format YYYY-MM-DD hh:mm") }).optional() }).shape