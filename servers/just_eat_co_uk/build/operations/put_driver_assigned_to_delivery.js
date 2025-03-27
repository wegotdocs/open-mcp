import { z } from "zod";
export const toolName = `put_driver_assigned_to_delivery`;
export const toolDescription = `Driver Assigned to Delivery`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/driver-assigned-to-delivery`;
export const method = `put`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "DriverContactNumber": z.string().optional(), "DriverName": z.string().optional(), "EstimatedDeliveryTime": z.string().datetime({ offset: true }).optional(), "EstimatedPickupTime": z.string().datetime({ offset: true }).optional(), "Event": z.enum(["DriverAssigned", "DriverAtRestaurant", "OnItsWay", "AtDeliveryAddress", "Delivered"]).optional(), "OrderId": z.string().optional(), "TimeStamp": z.string().datetime({ offset: true }).optional() }).optional() }).shape;
