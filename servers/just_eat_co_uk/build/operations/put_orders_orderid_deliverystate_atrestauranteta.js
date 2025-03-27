import { z } from "zod";
export const toolName = `put_orders_orderid_deliverystate_atrestauranteta`;
export const toolDescription = `Update the driver's estimated time to arrive at the Restaurant`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/orders/{orderId}/deliverystate/atrestauranteta`;
export const method = `put`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "orderId": z.string().describe("Just Eat order identifier") }).optional(), "body": z.object({ "bestGuess": z.string().datetime({ offset: true }).describe("This should represent the delivery partner's best guess at when the driver will arrive at the restaurant.").optional(), "estimatedAt": z.string().datetime({ offset: true }).describe("This is the time at which you are doing the estimation").optional() }).optional() }).shape;
