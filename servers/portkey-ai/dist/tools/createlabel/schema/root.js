import { z } from "zod";
export const inputParams = {
    "organisation_id": z.string().uuid().describe("ID of the organisation").optional(),
    "workspace_id": z.string().describe("ID or slug of the workspace").optional(),
    "name": z.string().regex(new RegExp("^(?!latest$)(?!default$)(?!\\d+$)[a-zA-Z0-9_-]*[^@\\s]?[a-zA-Z0-9_-]*$")).describe("Name of the label"),
    "description": z.string().describe("Description of the label").optional(),
    "color_code": z.string().describe("Color code for the label").optional()
};
