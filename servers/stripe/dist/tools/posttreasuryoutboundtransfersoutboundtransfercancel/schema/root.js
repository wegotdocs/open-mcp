import { z } from "zod";
export const inputParams = {
    "outbound_transfer": z.string().max(5000)
};
