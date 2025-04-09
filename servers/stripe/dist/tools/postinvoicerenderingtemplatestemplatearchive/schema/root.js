import { z } from "zod";
export const inputParams = {
    "template": z.string().max(5000)
};
