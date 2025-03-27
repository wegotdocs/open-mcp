import { z } from "zod"

export const toolName = `put_delivery_pools_deliverypoolid_restaurants`
export const toolDescription = `Add restaurants to an existing delivery pool`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/delivery/pools/{deliveryPoolId}/restaurants`
export const method = `put`
export const security = []

export const inputParams = z.object({}).shape