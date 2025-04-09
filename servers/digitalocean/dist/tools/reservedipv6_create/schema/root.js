import { z } from "zod";
export const inputParams = {
    "region_slug": z.string().describe("The slug identifier for the region the reserved IPv6 will be reserved to.")
};
