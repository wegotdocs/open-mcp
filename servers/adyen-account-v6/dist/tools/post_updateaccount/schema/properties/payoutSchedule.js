import { z } from "zod";
export const inputParams = {
    "action": z.enum(["CLOSE", "NOTHING", "UPDATE"]).describe("Direction on how to handle any payouts that have already been scheduled.\n\nPossible values:\n* `CLOSE`: close the existing batch of payouts.\n* `UPDATE`: reschedule the existing batch to the new schedule.\n* `NOTHING` (**default**): allow the payout to proceed.").optional(),
    "reason": z.string().describe("The reason for the payout schedule update.\n> This field is required when the `schedule` parameter is set to `HOLD`.").optional(),
    "schedule": z.enum(["BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT", "DAILY", "DAILY_AU", "DAILY_EU", "DAILY_SG", "DAILY_US", "HOLD", "MONTHLY", "WEEKLY", "WEEKLY_MON_TO_FRI_AU", "WEEKLY_MON_TO_FRI_EU", "WEEKLY_MON_TO_FRI_US", "WEEKLY_ON_TUE_FRI_MIDNIGHT", "WEEKLY_SUN_TO_THU_AU", "WEEKLY_SUN_TO_THU_US"]).describe("The new payout schedule for the account.\n\nPossible values: `DEFAULT`, `DAILY`, `DAILY_US`, `DAILY_EU`, `DAILY_AU`, `DAILY_SG`, `WEEKLY`, `WEEKLY_ON_TUE_FRI_MIDNIGHT`, `BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT`, `MONTHLY`, `HOLD`.\n> `HOLD` prevents scheduled payouts, but you can still initiate payouts manually.")
};
