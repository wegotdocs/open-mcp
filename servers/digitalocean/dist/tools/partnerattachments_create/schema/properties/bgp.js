import { z } from "zod";
export const inputParams = {
    "local_router_ip": z.string().describe("IP of the DO router"),
    "peer_router_ip": z.string().describe("IP of the Naas Provider router"),
    "peer_router_asn": z.number().int().describe("ASN of the peer router"),
    "auth_key": z.string().describe("BGP Auth Key")
};
