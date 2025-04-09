import { z } from "zod";
export const inputParams = {
    "domain_name": z.string().describe("The name of the domain itself."),
    "name": z.string().describe("A fully qualified record name. For example, to only include records matching sub.example.com, send a GET request to `/v2/domains/$DOMAIN_NAME/records?name=sub.example.com`.").optional(),
    "type": z.enum(["A", "AAAA", "CAA", "CNAME", "MX", "NS", "SOA", "SRV", "TXT"]).describe("The type of the DNS record. For example: A, CNAME, TXT, ...").optional(),
    "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
    "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
};
