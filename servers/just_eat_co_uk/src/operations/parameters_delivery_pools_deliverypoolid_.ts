import { z } from "zod"

export const toolName = `parameters_delivery_pools_deliverypoolid_`
export const toolDescription = ``
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/delivery/pools/{deliveryPoolId}`
export const method = `parameters`
export const security = []

export const inputParams = z.object({}).shape