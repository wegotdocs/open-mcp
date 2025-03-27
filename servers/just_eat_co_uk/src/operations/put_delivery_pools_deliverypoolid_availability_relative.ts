import { z } from "zod"

export const toolName = `put_delivery_pools_deliverypoolid_availability_relative`
export const toolDescription = `Set availability for pickup`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/delivery/pools/{deliveryPoolId}/availability/relative`
export const method = `put`
export const security = []

export const inputParams = z.object({ "body": z.object({ "bestGuess": z.string().describe("Your best estimation (hh:mm:ss)").optional() }).optional() }).shape