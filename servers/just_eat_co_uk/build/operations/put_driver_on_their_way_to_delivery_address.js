import { z } from "zod";
export const toolName = `put_driver_on_their_way_to_delivery_address`;
export const toolDescription = `Driver on their way to delivery address`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/driver-on-their-way-to-delivery-address`;
export const method = `put`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "DriverContactNumber": z.string().optional(), "DriverName": z.string().optional(), "EstimatedDeliveryTime": z.string().datetime({ offset: true }).optional(), "EstimatedPickupTime": z.string().datetime({ offset: true }).optional(), "Event": z.enum(["DriverAssigned", "DriverAtRestaurant", "OnItsWay", "AtDeliveryAddress", "Delivered"]).optional(), "OrderId": z.string().optional(), "TimeStamp": z.string().datetime({ offset: true }).optional() }).optional() }).shape;
