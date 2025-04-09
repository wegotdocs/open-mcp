import { z } from "zod";
export const inputParams = {
    "name": z.string().max(256).describe("The name for the `Knowledge Base`").optional(),
    "instructions": z.string().max(4096).describe("The instructions for the `Knowledge Base`.").optional(),
    "project_id": z.string().regex(new RegExp("^pj_[a-zA-Z0-9]{25}$")).max(28).describe("The unique identifier for the `Project` that the `Knowledge Base` will be assigned to. If no `project_id` is provided, the `Knowledge Base` will be assigned to the default `Project`.").optional()
};
