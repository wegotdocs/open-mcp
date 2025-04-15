import { z } from "zod"

export const inputParams = {
  "membership_balance": z.string().describe("周卡、月卡：剩余天数（包括今天），单位日；\t次卡：剩余次数（包括本次），单位次；\t储值：余额，单位元；\t折扣：折扣力度，代表0-10折；0折即为免费；").optional(),
  "membership_type": z.string().describe("会员类型；\tWEEK_CARD：周卡\tMONTH_CARD：月卡\tSEASON_CARD：季卡\tYEAR_CARD：年卡\tMULTIPLE_PASS_CARD：次卡\tMONEY_STORED_CARD：储值\tDISCOUNT_CARD：折扣").optional()
}