import { z } from "zod"

export const toolName = `get_countries_country_code_json`
export const toolDescription = `Retrieve a single Country information.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/countries/{country_code}.json`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "country_code": z.string().describe("ISO3166 Country Code") }).optional() }).shape