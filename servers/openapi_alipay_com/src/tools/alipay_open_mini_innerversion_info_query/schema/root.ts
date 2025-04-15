import { z } from "zod"

export const inputParams = {
  "bundle_id": z.string().describe("端信息").optional(),
  "mini_app_id": z.string().describe("小程序ID").optional(),
  "app_version": z.string().describe("查询版本号").optional(),
  "app_origin": z.string().describe("业务来源，新接入方需要向支付宝申请专用来源，否则不予接入。https://yuque.antfin-inc.com/tinyapp-all/qddncu/bidushixiang").optional()
}