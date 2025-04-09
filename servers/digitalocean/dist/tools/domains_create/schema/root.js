import { z } from "zod";
export const inputParams = {
    "name": z.string().describe("The name of the domain itself. This should follow the standard domain format of domain.TLD. For instance, `example.com` is a valid domain name.").optional(),
    "ip_address": z.string().describe("This optional attribute may contain an IP address. When provided, an A record will be automatically created pointing to the apex domain.").optional(),
    "ttl": z.number().int().nullable().describe("This value is the time to live for the records on this domain, in seconds. This defines the time frame that clients can cache queried information before a refresh should be requested.").readonly().optional(),
    "zone_file": z.string().nullable().describe("This attribute contains the complete contents of the zone file for the selected domain. Individual domain record resources should be used to get more granular control over records. However, this attribute can also be used to get information about the SOA record, which is created automatically and is not accessible as an individual record resource.").readonly().optional()
};
