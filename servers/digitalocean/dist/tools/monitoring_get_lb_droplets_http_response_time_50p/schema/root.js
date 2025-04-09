import { z } from "zod";
export const inputParams = {
    "lb_id": z.string().describe("A unique identifier for a load balancer."),
    "start": z.string().describe("UNIX timestamp to start metric window."),
    "end": z.string().describe("UNIX timestamp to end metric window.")
};
