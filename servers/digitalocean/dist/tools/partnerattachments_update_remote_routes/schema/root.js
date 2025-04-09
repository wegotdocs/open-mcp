import { z } from "zod";
export const inputParams = {
    "pa_id": z.string().describe("A unique identifier for a partner attachment."),
    "remote_routes": z.array(z.object({ "cidr": z.string().describe("A CIDR block representing a remote route.").optional() })).optional()
};
