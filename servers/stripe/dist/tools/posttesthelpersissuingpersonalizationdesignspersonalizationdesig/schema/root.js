import { z } from "zod";
export const inputParams = {
    "personalization_design": z.string().max(5000)
};
