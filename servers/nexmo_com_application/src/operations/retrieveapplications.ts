import { z } from "zod"

export const toolName = `retrieveapplications`
export const toolDescription = `Retrieve all Applications`
export const baseUrl = `https://api.nexmo.com/v1/applications`
export const path = `/`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "api_key": z.string().describe("You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)"), "api_secret": z.string().describe("You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)"), "page_size": z.number().int().describe("Set the number of items returned on each call to this endpoint. The default is 10 records."), "page_index": z.number().int().describe("Set the offset from the first page. The default value is `0`.") }).optional() }).shape