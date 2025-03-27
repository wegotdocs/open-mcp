import { z } from "zod";
export const toolName = `put_delivery_pools_deliverypoolid_hours`;
export const toolDescription = `Set the delivery pools daily start and end times`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/delivery/pools/{deliveryPoolId}/hours`;
export const method = `put`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "friday": z.object({ "closed": z.boolean().describe("true if the pool is closed for the day").optional(), "poolTimes": z.array(z.object({ "endTime": z.string().describe("pool end time for Friday (HH:mm)"), "startTime": z.string().describe("pool start time for Friday (HH:mm)") })).describe("pool start and end times for the day") }), "monday": z.object({ "closed": z.boolean().describe("true if the pool is closed for the day").optional(), "poolTimes": z.array(z.object({ "endTime": z.string().describe("pool end time for Monday (HH:mm)"), "startTime": z.string().describe("pool start time for Monday (HH:mm)") })).describe("pool start and end times for the day") }), "saturday": z.object({ "closed": z.boolean().describe("true if the pool is closed for the day").optional(), "poolTimes": z.array(z.object({ "endTime": z.string().describe("pool end time for Saturday (HH:mm)"), "startTime": z.string().describe("pool start time for Saturday (HH:mm)") })).describe("pool start and end times for the day") }), "sunday": z.object({ "closed": z.boolean().describe("true if the pool is closed for the day").optional(), "poolTimes": z.array(z.object({ "endTime": z.string().describe("pool end time for Sunday (HH:mm)"), "startTime": z.string().describe("pool start time for Sunday (HH:mm)") })).describe("pool start and end times for the day") }), "thursday": z.object({ "closed": z.boolean().describe("true if the pool is closed for the day").optional(), "poolTimes": z.array(z.object({ "endTime": z.string().describe("pool end time for Thursday (HH:mm)"), "startTime": z.string().describe("pool start time for Thursday (HH:mm)") })).describe("pool start and end times for the day") }), "tuesday": z.object({ "closed": z.boolean().describe("true if the pool is closed for the day").optional(), "poolTimes": z.array(z.object({ "endTime": z.string().describe("pool end time for Tuesday (HH:mm)"), "startTime": z.string().describe("pool start time for Tuesday (HH:mm)") })).describe("pool start and end times for the day") }), "wednesday": z.object({ "closed": z.boolean().describe("true if the pool is closed for the day").optional(), "poolTimes": z.array(z.object({ "endTime": z.string().describe("pool end time for Wednesday (HH:mm)"), "startTime": z.string().describe("pool start time for Wednesday (HH:mm)") })).describe("pool start and end times for the day") }) }).optional() }).shape;
