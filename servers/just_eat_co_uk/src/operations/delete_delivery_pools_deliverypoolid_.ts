import { z } from "zod"

export const toolName = `delete_delivery_pools_deliverypoolid_`
export const toolDescription = `Delete a delivery pool`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/delivery/pools/{deliveryPoolId}`
export const method = `delete`
export const security = []

export const inputParams = z.object({}).shape