import { z } from "zod";
export const toolName = `put_driver_location`;
export const toolDescription = `Driver Location`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/driver-location`;
export const method = `put`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "Location": z.object({ "Latitude": z.number(), "Longitude": z.number() }).optional(), "OrderId": z.string().optional(), "TimeStamp": z.string().datetime({ offset: true }).optional() }).optional() }).shape;
