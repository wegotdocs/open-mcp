import { z } from "zod"

export const toolName = `post_c2c_v4_drivers_driverid_verify`
export const toolDescription = `Validate and verify external cloud credentials for driver`
export const baseUrl = `https://tracking.api.here.com`
export const path = `/c2c/v4/drivers/{driverId}/verify`
export const method = `post`
export const security = []

export const inputParams = z.object({ "path": z.object({ "driverId": z.string().min(1).max(50).describe("Identifier of the driver.") }).optional(), "body": z.record(z.any()).describe("An external cloud-specific object that the driver will use to login to the\nexternal cloud. The structure of this object varies per driver\nimplementation.\nIt is recommended to have dedicated credentials for logging in to\nthe external cloud in order not to violate possible concurrent users\npolicies of the external cloud.\nIn case of the HERE Tracking loopback driver, the maximum\nallowed concurrent user account tokens is 3 per account,\ntherefore it is recommended to create a separate HERE account\nand grant it the required privilege to update the connector's\nproject, and use that account in externalCloudInfo.\n").optional() }).shape