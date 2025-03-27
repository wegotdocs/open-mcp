import { z } from "zod"

export const toolName = `post_orders_tenant_orderid_consumerqueries_lateordercompensation`
export const toolDescription = `Update late order compensation request with Restaurant response`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/orders/{tenant}/{orderId}/consumerqueries/lateordercompensation/restaurantresponse`
export const method = `post`
export const security = []

export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("Request tenant."), "orderId": z.string().describe("Id for the order.") }).optional(), "header": z.object({ "Authorization": z.string().describe("Containing a partner issued API key e.g. `JE-API-KEY ABCDE123456789`") }).optional(), "body": z.object({ "acceptedAmount": z.number().int().describe("The monetary amount of compensation granted, in cents/pence. Required when `isAccepted = true`.").optional(), "isAccepted": z.boolean().describe("Flag to indicate whether a compensation request has been accepted or rejected.").optional(), "orderId": z.string().describe("The ID of the late order compensation request that this response relates to.").optional(), "rejectedReasonCode": z.enum(["BadTraffic","BadWeather","BusierThanExpected","CompensatedWithItem","NoReason"]).describe("\n- `BadTraffic` : The driver was stuck in heavy traffic, sorry.\n- `BadWeather` : The bad weather was delaying our deliveries, sorry.\n- `BusierThanExpected` : Our restaurant was busier than we expected.\n- `CompensatedWithItem` : We gave you something from the menu free of charge to make up for it.\n- `NoReason` : We're really sorry your order was late. We hope you enjoyed your food.").optional() }).optional() }).shape