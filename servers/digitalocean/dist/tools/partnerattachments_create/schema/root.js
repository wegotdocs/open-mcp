import { z } from "zod";
export const inputParams = {
    "name": z.string().regex(new RegExp("^[a-zA-Z0-9\\-\\.]+$")).describe("The name of the partner attachment. Must be unique and may only contain alphanumeric characters, dashes, and periods."),
    "connection_bandwidth_in_mbps": z.union([z.literal(1000), z.literal(2000), z.literal(5000), z.literal(10000)]).describe("Bandwidth (in Mbps) of the connection."),
    "region": z.string(),
    "naas_provider": z.string(),
    "vpc_ids": z.array(z.string()).min(1).describe("An array of VPCs IDs."),
    "parent_uuid": z.string().describe("Optional associated partner attachment UUID").optional(),
    "bgp": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `bgp` to the tool, first call the tool `expandSchema` with \"/properties/bgp\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Optional BGP configurations</property-description>").optional()
};
