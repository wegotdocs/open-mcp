import { z } from "zod";
export const inputParams = {
    "parent_agent_uuid": z.string().describe("A unique identifier for the parent agent."),
    "child_agent_uuid": z.string().describe("Routed agent id"),
    "b_child_agent_uuid": z.string().describe("Routed agent id").optional(),
    "if_case": z.string().optional(),
    "b_parent_agent_uuid": z.string().describe("A unique identifier for the parent agent.").optional(),
    "route_name": z.string().describe("Name of route").optional()
};
