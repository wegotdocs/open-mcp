import { z } from "zod";
export const inputParams = {
    "value_list": z.string().max(5000)
};
