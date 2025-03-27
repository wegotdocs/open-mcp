import { z } from "zod"

export const toolName = `get_consumers_tenant_`
export const toolDescription = `Get consumers details`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/consumers/{tenant}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("The identifier for the tenant.") }).optional(), "query": z.object({ "emailAddress": z.string().describe("Email address of the consumer."), "accountType": z.literal("registered").describe("The account type of the consumer - currently only 'registered' accounts are supported."), "count": z.string().describe("Returns the number of consumers that matches the `emailAddress` and `accountType`. The query value should be empty, e.g. `/consumers/uk/?emailAddress=someone@email.com&accountType=registered&count`.") }).optional() }).shape