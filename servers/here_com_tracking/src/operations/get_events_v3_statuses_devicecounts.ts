import { z } from "zod"

export const toolName = `get_events_v3_statuses_devicecounts`
export const toolDescription = `Gets the number of devices and shipments in each event state`
export const baseUrl = `https://tracking.api.here.com`
export const path = `/events/v3/statuses/deviceCounts`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "query": z.object({ "groupBy": z.enum(["ruleId","eventSource"]).describe("Define whether the number of devices and shipments in each event state is calculated per rule ID or per rule type.\n"), "eventSource": z.any().superRefine((x, ctx) => {
    const schemas = [z.enum(["attach","battery","geofence","humidity","pressure","tamper","temperature","acceleration","dwelling","detention","utilization","online","shipmentSchedule"]).describe("Source of the event.\n"), z.array(z.enum(["attach","battery","geofence","humidity","pressure","tamper","temperature","acceleration","dwelling","detention","utilization","online","shipmentSchedule"]).describe("Source of the event.\n"))];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "trackingId": z.any().superRefine((x, ctx) => {
    const schemas = [z.string().min(1).max(50).describe("This is a unique ID associated with the device data in HERE Tracking. For physical devices the `trackingId` gets assigned to a device when the device is claimed by a user, and for virtual devices it is an external device ID along with the device project `appId`. Alternatively, a valid `shipmentId` may be used."), z.array(z.string().min(1).max(50).describe("This is a unique ID associated with the device data in HERE Tracking. For physical devices the `trackingId` gets assigned to a device when the device is claimed by a user, and for virtual devices it is an external device ID along with the device project `appId`. Alternatively, a valid `shipmentId` may be used."))];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
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
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "geofenceId": z.any().superRefine((x, ctx) => {
    const schemas = [z.string().uuid().describe("ID of the geofence. Must be a valid UUIDv4.\nThis filter can be used to filter results related to dwelling event source.\n"), z.array(z.string().uuid().describe("ID of the geofence. Must be a valid UUIDv4.\nThis filter can be used to filter results related to dwelling event source.\n"))];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).optional(), "shipments": z.boolean().describe("If `true`, the results will be limited to shipment event statuses only.\nIf `false`, the results will be limited to device event statuses only.\nIf not specified, the results will include both device and shipments event statuses.\n").optional(), "pageToken": z.string().describe("A token from the previously returned response to retrieve the specified page.").optional(), "count": z.number().int().gte(1).lte(1000).describe("The number of items to return per page."), "appId": z.string().min(8).describe("Application identifier. Used together with an external ID to identify a virtual device.").optional() }).optional() }).shape