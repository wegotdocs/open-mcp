import { z } from "zod";
export const inputParams = {
    "webhook_endpoint": z.string().max(5000)
};
