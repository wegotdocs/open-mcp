import { z } from "zod";
export const inputParams = {
    "workspaceId": z.string(),
    "current_page": z.number().optional(),
    "page_size": z.number().optional(),
    "role": z.enum(["admin", "manager", "member"]).optional(),
    "email": z.string().optional()
};
