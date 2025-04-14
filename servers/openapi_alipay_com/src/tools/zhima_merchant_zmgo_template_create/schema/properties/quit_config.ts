import { z } from "zod"

export const inputParams = {
  "quit_desc": z.string().describe("退出提示").optional(),
  "quit_jump_url": z.string().describe("退出跳转商家页地址，当quit_type取值为：QUIT_MERCHANT_JUMP，必传").optional(),
  "quit_type": z.string().describe("退出芝麻GO方式，取值：\t  （1）QUIT_COMMON(\"QUIT_COMMON\", \"标准退出\"),\t（2）QUIT_MERCHANT_JUMP(\"QUIT_MERCHANT_JUMP\", \"商家页退出\"),\t（3）QUIT_ONLY_TIPS(\"QUIT_ONLY_TIPS\", \"仅退出提示\")").optional()
}