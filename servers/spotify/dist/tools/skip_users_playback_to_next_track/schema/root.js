import { z } from "zod";
export const inputParams = {
    "device_id": z.string().describe("The id of the device this command is targeting. If not supplied, the user's currently active device is the target.").optional()
};
