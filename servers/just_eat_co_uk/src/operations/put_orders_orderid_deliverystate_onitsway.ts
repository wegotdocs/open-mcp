import { z } from "zod"

export const toolName = `put_orders_orderid_deliverystate_onitsway`
export const toolDescription = `Update order with driver on its way details`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/orders/{orderId}/deliverystate/onitsway`
export const method = `put`
export const security = []

export const inputParams = z.object({ "path": z.object({ "orderId": z.string() }).optional(), "body": z.object({ "EstimatedArrivalTime": z.string().datetime({ offset: true }).describe("This should represent the delivery partner's best guess at when the driver will arrive at the customer's address. In other words, it should not just contain the delivery time initially requested by Just Eat.").optional(), "Location": z.object({ "Accuracy": z.number().describe("This should represent the accuracy of driver's location.").optional(), "Heading": z.number().describe("This should represent the degree of heading direction, for example, 0 is north, 90 is east.").optional(), "Latitude": z.number().describe("This should represent the latitude of the driver's location."), "Longitude": z.number().describe("This should represent the longitude of the driver's location."), "Speed": z.number().describe("This should represent the travel speed of the driver.").optional() }).describe("GeoLocation object containing latitude and longitude values.").optional(), "TimeStampWithUtcOffset": z.string().datetime({ offset: true }).describe("This should represent the driver on its ways timestamp.").optional() }).optional() }).shape