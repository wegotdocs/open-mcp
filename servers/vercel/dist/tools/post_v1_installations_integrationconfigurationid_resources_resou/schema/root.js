import { z } from "zod";
export const inputParams = {
    "integrationConfigurationId": z.string(),
    "resourceId": z.string(),
    "items": z.array(z.object({ "id": z.string().max(1024), "slug": z.string().max(1024), "origin": z.string().max(2048), "category": z.enum(["experiment", "flag"]).optional(), "name": z.string().max(1024).optional(), "description": z.string().max(1024).optional(), "isArchived": z.boolean().optional(), "createdAt": z.number().optional(), "updatedAt": z.number().optional() }).strict()).max(50)
};
