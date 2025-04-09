import { z } from "zod";
export const inputParams = {
    "schedule": z.string().max(5000)
};
