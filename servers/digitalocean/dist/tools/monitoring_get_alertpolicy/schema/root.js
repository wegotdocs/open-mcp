import { z } from "zod";
export const inputParams = {
    "alert_uuid": z.string().describe("A unique identifier for an alert policy.")
};
