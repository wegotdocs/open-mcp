import { z } from "zod";
export const inputParams = {
    "plan": z.string().max(5000)
};
