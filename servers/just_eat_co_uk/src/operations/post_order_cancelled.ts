import { z } from "zod"

export const toolName = `post_order_cancelled`
export const toolDescription = `Order cancelled`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/order-cancelled`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "Event": z.string().optional(), "OrderId": z.string().optional(), "Reason": z.enum(["cust_cancelled_changed_mind","cust_cancelled_delivery_too_long","cust_cancelled_made_mistake","cust_cancelled_other","delivery_partner_cancelled","rest_cancelled_customer_absent","rest_cancelled_customer_requested","rest_cancelled_declined","rest_cancelled_drivers_unavailable","rest_cancelled_fake_order","rest_cancelled_other","rest_cancelled_out_of_stock","rest_cancelled_too_busy","system_cancelled_other","system_cancelled_test_order"]).describe("The reason the order was cancelled.").optional() }).optional() }).shape