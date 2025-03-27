import { z } from "zod";
export const toolName = `post_c2c_v4_connectors`;
export const toolDescription = `Creates a connector`;
export const baseUrl = `https://tracking.api.here.com`;
export const path = `/c2c/v4/connectors`;
export const method = `post`;
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
export const inputParams = z.object({ "body": z.object({ "description": z.string().max(200).describe("Brief description of the connector.").optional(), "driverId": z.string().min(1).max(50).describe("Identifier of the driver to be used with this connector."), "enabled": z.boolean().describe("Enabled state of the connector. If set to false then the connector\nwill not execute periodically.\n"), "externalCloudInfo": z.record(z.any()).describe("An external cloud-specific object that the driver will use to login to the\nexternal cloud. The structure of this object varies per driver\nimplementation.\nIt is recommended to have dedicated credentials for logging in to\nthe external cloud in order not to violate possible concurrent users\npolicies of the external cloud.\nIn case of the HERE Tracking loopback driver, the maximum\nallowed concurrent user account tokens is 3 per account,\ntherefore it is recommended to create a separate HERE account\nand grant it the required privilege to update the connector's\nproject, and use that account in externalCloudInfo.\n"), "name": z.string().min(1).max(100).describe("Name of the connector."), "refreshIntervalS": z.number().int().gte(60).describe("This is the interval (in seconds) to execute the sync process\nbetween the connector's external cloud and HERE Tracking project.\nThe maximum and at the same time default value for callback-type connectors is 900 seconds.\nThe default value for other type of connectors is 3600 seconds and there is no maximum value set.\n").optional() }).strict().optional() }).shape;
