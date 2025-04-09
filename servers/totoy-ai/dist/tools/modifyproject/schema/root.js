import { z } from "zod";
export const inputParams = {
    "project_id": z.string().regex(new RegExp("^pj_[a-zA-Z0-9]{25}$")).max(28).describe("Unique identifier for a `Project` created in Totoy."),
    "name": z.string().max(256).describe("The name of the `Project`.").optional()
};
