import { z } from "zod"

export const inputParams = {
  "mini_app_id": z.string().describe("根据承接品的商家小程序ID查询").optional(),
  "pid": z.string().describe("根据承接该品的小程序背后的商家查询").optional(),
  "goods_id": z.string().describe("根据商品的唯一标识查询").optional(),
  "page_num": z.number().int().describe("查询第几页，最小值为1").optional(),
  "page_size": z.number().int().describe("查询页面数量，最大值为50").optional()
}