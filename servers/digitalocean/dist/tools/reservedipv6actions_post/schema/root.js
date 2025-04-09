import { z } from "zod";
export const inputParams = {
    "reserved_ipv6": z.string().ip({ version: "v6" }).describe("A reserved IPv6 address.")
};
