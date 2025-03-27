import { z } from "zod"

export const toolName = `put_delivery_pools_deliverypoolid_`
export const toolDescription = `Replace an existing delivery pool`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/delivery/pools/{deliveryPoolId}`
export const method = `put`
export const security = []

export const inputParams = z.object({ "body": z.object({ "name": z.string().describe("The name of the pool, used by operations teams, in reports, etc."), "restaurants": z.array(z.number()).describe("A list of Just Eat restaurant ids served by the delivery pool.").optional() }).optional() }).shape