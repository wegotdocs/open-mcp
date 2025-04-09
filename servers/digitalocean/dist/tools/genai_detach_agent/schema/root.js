import { z } from "zod";
export const inputParams = {
    "parent_agent_uuid": z.string().describe("Pagent agent id"),
    "child_agent_uuid": z.string().describe("Routed agent id")
};
