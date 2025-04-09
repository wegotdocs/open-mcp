import { z } from "zod";
export const inputParams = {
    "uri": z.string().describe("The uri of the item to add to the queue. Must be a track or an episode uri.\n"),
    "device_id": z.string().describe("The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n").optional()
};
