import { z } from "zod"

export const toolName = `get_countries_country_code_regions_region_code_json`
export const toolDescription = `Retrieve a single Region information object.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/countries/{country_code}/regions/{region_code}.json`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "country_code": z.string().describe("ISO3166 Country Code"), "region_code": z.string().describe("Region Code") }).optional() }).shape