import { z } from "zod"

export const toolName = `put_attempted_delivery_query_resolved`
export const toolDescription = `Attempted delivery query resolved`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/attempted-delivery-query-resolved`
export const method = `put`
export const security = []

export const inputParams = z.object({ "body": z.object({ "OrderId": z.string().describe("The ID of the order for which an attempted delivery query has been resolved").optional(), "Resolution": z.object({ "Cancellation": z.object({ "Reason": z.enum(["new_address_not_within_area","unable_to_reprepare","driver_not_available","area_unsafe","customer_doesnt_want_anymore"]).describe("The reason for cancelling the order").optional() }).describe("The cancellation properties. Only required if the order has been cancelled, otherwise null").optional(), "Redelivery": z.object({ "CustomerTimeZone": z.string().describe("The IANA TZ database name of the time zone the customer that placed the order is in").optional(), "NewDueDate": z.string().datetime({ offset: true }).describe("Updated due date for delivery of the order in ISO 8601 format").optional(), "Status": z.enum(["driver_at_address","repreparing"]).describe("The current status of the order").optional() }).describe("The redelivery properties. Only required if the order is being redelivered, otherwise null").optional(), "Type": z.enum(["order_cancelled","redeliver_order"]).describe("The type of resolution to the query, either cancellation or redelivery").optional() }).describe("Details of the resolution to the query").optional(), "Tenant": z.enum(["uk","dk","es","ie","it","no","au","nz"]).describe("The tenant of the restaurant the order was placed at").optional() }).optional() }).shape