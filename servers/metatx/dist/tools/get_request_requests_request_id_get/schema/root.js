import { z } from "zod";
export const inputParams = {
    "request_id": z.string().uuid()
};
