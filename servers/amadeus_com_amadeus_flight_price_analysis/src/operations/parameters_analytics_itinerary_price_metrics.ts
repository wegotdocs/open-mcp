import { z } from "zod"

export const toolName = `parameters_analytics_itinerary_price_metrics`
export const toolDescription = ``
export const baseUrl = `https://test.api.amadeus.com/v1`
export const path = `/analytics/itinerary-price-metrics`
export const method = `parameters`
export const security = []

export const inputParams = z.object({}).shape