import { z } from "zod";
export const toolName = `put_orders_orderid_deliverystate_atrestaurant`;
export const toolDescription = `Update order with driver at restaurant details`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/orders/{orderId}/deliverystate/atrestaurant`;
export const method = `put`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "orderId": z.string().describe("Just Eat order identifier") }).optional(), "body": z.object({ "EtaAtDeliveryAddress": z.string().datetime({ offset: true }).describe("This should represent the delivery partner's best guess at when the driver will arrive at the delivery address.").optional(), "Location": z.object({ "Accuracy": z.number().describe("This should represent the accuracy of driver's location.").optional(), "Heading": z.number().describe("This should represent the degree of heading direction, for example, 0 is north, 90 is east.").optional(), "Latitude": z.number().describe("This should represent the latitude of the driver's location."), "Longitude": z.number().describe("This should represent the longitude of the driver's location."), "Speed": z.number().describe("This should represent the travel speed of the driver.").optional() }).describe("GeoLocation object containing latitude and longitude values.").optional(), "TimeStampWithUtcOffset": z.string().datetime({ offset: true }).describe("This should represent the Eta calculated timestamp.").optional() }).optional() }).shape;
