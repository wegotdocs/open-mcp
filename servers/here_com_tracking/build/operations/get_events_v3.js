import { z } from "zod";
export const toolName = `get_events_v3`;
export const toolDescription = `Gets event history`;
export const baseUrl = `https://tracking.api.here.com`;
export const path = `/events/v3`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const inputParams = z.object({ "query": z.object({ "before": z.number().gte(1).describe("Milliseconds elapsed since 1 January 1970 00:00:00 UTC.\nThe accepted range is from 1 to the current time.\n").optional(), "after": z.number().gte(0).describe("Milliseconds elapsed since 1 January 1970 00:00:00 UTC.\nThe accepted range is from 0 to the current time.\n").optional(), "eventSource": z.any().superRefine((x, ctx) => {
            const schemas = [z.enum(["attach", "battery", "geofence", "humidity", "pressure", "tamper", "temperature", "acceleration", "dwelling", "stock", "detention", "utilization", "online", "shipmentSchedule"]).describe("The event source rule type.\n"), z.array(z.enum(["attach", "battery", "geofence", "humidity", "pressure", "tamper", "temperature", "acceleration", "dwelling", "stock", "detention", "utilization", "online", "shipmentSchedule"]).describe("The event source rule type.\n"))];
            const errors = schemas.reduce((errors, schema) => ((result) => result.error ? [...errors, result.error] : errors)(schema.safeParse(x)), []);
            if (schemas.length - errors.length !== 1) {
                ctx.addIssue({
                    path: ctx.path,
                    code: "invalid_union",
                    unionErrors: errors,
                    message: "Invalid input: Should pass single schema",
                });
            }
        }).optional(), "eventType": z.any().superRefine((x, ctx) => {
            const schemas = [z.enum(["BELOW_RANGE", "IN_RANGE", "ABOVE_RANGE", "FALSE_TO_TRUE", "TRUE_TO_FALSE", "EVENT", "INSIDE_GEOFENCE", "OUTSIDE_GEOFENCE", "OVERSTOCK", "NORMAL_VOLUME", "UNDERSTOCK", "DWELLING_STARTED", "DWELLING_ENDED", "DETENTION_STARTED", "DETENTION_ENDED", "UTILIZED", "UNUTILIZED", "SHIPMENT_EARLY", "SHIPMENT_ON_TIME", "SHIPMENT_DELAYED"]).describe("Type of the event.\n\nAn event is created every time an associated rule or geofence is triggered by a device ingestion.\nThe event type depends on the data the device sends.\n\nSensors that report numerical data (such as battery, humidity, pressure and temperature sensors),\ngenerate an event when the reported sensor reading of the device goes in or out of range, which is configured in the rule.\nThis produces events of BELOW_RANGE, IN_RANGE and ABOVE_RANGE types.\n\nSensors that report boolean data (such as attach and tamper sensors), generate events when the device \ntransitions from one state to another, either from `false` to `true` or vice versa.\nThis produces events of FALSE_TO_TRUE and TRUE_TO_FALSE types.\nThe same event types are also generated by the online rule when the device state changes from `offline` \n(when the device has stopped ingesting data) to `online` (when the device data ingestion has resumed) \nor vice versa.\n\nThe acceleration sensor generates events whenever the reported sensor reading \ncrosses the acceleration threshold (for example, when the device was dropped).\nThis produces events of the type EVENT. \nSuch events are stateless.\n\nEvents of INSIDE_GEOFENCE and OUTSIDE_GEOFENCE types are generated when the device enters or exits\na geofence associated with the device.\n\nEvents of DWELLING_STARTED type are generated when the device has\nstayed inside an associated geofence for longer than the threshold duration. \nDWELLING_ENDED type events are generated when dwelling of the device has ended.\n\nEvents of DETENTION_STARTED type are generated when the device has been\nstationary for longer than the threshold duration, regardless whether the device is inside \nor outside of any geofence. \nDETENTION_ENDED type events will be generated when the device starts moving again.\n\nEvents of UNUTILIZED type are generated when the device has been stationary for longer than the\nthreshold duration.\nUTILIZED type events are generated when the device starts moving again after having been stationary.\n\nEvents of OVERSTOCK, NORMAL_VOLUME and UNDERSTOCK types are generated when the number of assets\ninside a geofence crosses the `minVolume` and `maxVolume` thresholds of an associated stock rule.\n\nEvents of SHIPMENT_EARLY, SHIPMENT_ON_TIME and SHIPMENT_DELAYED types are generated when a shipment\nis too early, on time or delayed.\n"), z.array(z.enum(["BELOW_RANGE", "IN_RANGE", "ABOVE_RANGE", "FALSE_TO_TRUE", "TRUE_TO_FALSE", "EVENT", "INSIDE_GEOFENCE", "OUTSIDE_GEOFENCE", "OVERSTOCK", "NORMAL_VOLUME", "UNDERSTOCK", "DWELLING_STARTED", "DWELLING_ENDED", "DETENTION_STARTED", "DETENTION_ENDED", "UTILIZED", "UNUTILIZED", "SHIPMENT_EARLY", "SHIPMENT_ON_TIME", "SHIPMENT_DELAYED"]).describe("Type of the event.\n\nAn event is created every time an associated rule or geofence is triggered by a device ingestion.\nThe event type depends on the data the device sends.\n\nSensors that report numerical data (such as battery, humidity, pressure and temperature sensors),\ngenerate an event when the reported sensor reading of the device goes in or out of range, which is configured in the rule.\nThis produces events of BELOW_RANGE, IN_RANGE and ABOVE_RANGE types.\n\nSensors that report boolean data (such as attach and tamper sensors), generate events when the device \ntransitions from one state to another, either from `false` to `true` or vice versa.\nThis produces events of FALSE_TO_TRUE and TRUE_TO_FALSE types.\nThe same event types are also generated by the online rule when the device state changes from `offline` \n(when the device has stopped ingesting data) to `online` (when the device data ingestion has resumed) \nor vice versa.\n\nThe acceleration sensor generates events whenever the reported sensor reading \ncrosses the acceleration threshold (for example, when the device was dropped).\nThis produces events of the type EVENT. \nSuch events are stateless.\n\nEvents of INSIDE_GEOFENCE and OUTSIDE_GEOFENCE types are generated when the device enters or exits\na geofence associated with the device.\n\nEvents of DWELLING_STARTED type are generated when the device has\nstayed inside an associated geofence for longer than the threshold duration. \nDWELLING_ENDED type events are generated when dwelling of the device has ended.\n\nEvents of DETENTION_STARTED type are generated when the device has been\nstationary for longer than the threshold duration, regardless whether the device is inside \nor outside of any geofence. \nDETENTION_ENDED type events will be generated when the device starts moving again.\n\nEvents of UNUTILIZED type are generated when the device has been stationary for longer than the\nthreshold duration.\nUTILIZED type events are generated when the device starts moving again after having been stationary.\n\nEvents of OVERSTOCK, NORMAL_VOLUME and UNDERSTOCK types are generated when the number of assets\ninside a geofence crosses the `minVolume` and `maxVolume` thresholds of an associated stock rule.\n\nEvents of SHIPMENT_EARLY, SHIPMENT_ON_TIME and SHIPMENT_DELAYED types are generated when a shipment\nis too early, on time or delayed.\n"))];
            const errors = schemas.reduce((errors, schema) => ((result) => result.error ? [...errors, result.error] : errors)(schema.safeParse(x)), []);
            if (schemas.length - errors.length !== 1) {
                ctx.addIssue({
                    path: ctx.path,
                    code: "invalid_union",
                    unionErrors: errors,
                    message: "Invalid input: Should pass single schema",
                });
            }
        }).optional(), "ruleId": z.any().superRefine((x, ctx) => {
            const schemas = [z.string().uuid().describe("ID of the rule or geofence. Must be a valid UUIDv4.\n"), z.array(z.string().uuid().describe("ID of the rule or geofence. Must be a valid UUIDv4.\n"))];
            const errors = schemas.reduce((errors, schema) => ((result) => result.error ? [...errors, result.error] : errors)(schema.safeParse(x)), []);
            if (schemas.length - errors.length !== 1) {
                ctx.addIssue({
                    path: ctx.path,
                    code: "invalid_union",
                    unionErrors: errors,
                    message: "Invalid input: Should pass single schema",
                });
            }
        }).optional(), "initialState": z.boolean().describe("Events with the `initialState` property set as `true` are generated when the rule is \nevaluated for the first time. It indicates the fact that this is the initial evaluation \nstate, which would serve as a starting point for the subsequent rule evaluations.\nThe rest of the rule events would represent a transition of a device or a shipment or \na geofence from one state to another and their `initialState` property will be set to `false`.\n").optional(), "pageToken": z.string().describe("A token from the previously returned response to retrieve the specified page.").optional(), "count": z.number().int().gte(1).lte(1000).describe("The number of items to return per page."), "appId": z.string().min(8).describe("Application identifier. Used together with an external ID to identify a virtual device.").optional() }).optional() }).shape;
