import { z } from "zod"

export const inputParams = {
  "mini_app_id": z.string().describe("插件id或模板id").optional(),
  "app_sub_type": z.string().describe("小程序应用子类型").optional(),
  "show_type": z.string().describe("是否在服务市场透出，SHOW展示、HIDE隐藏").optional(),
  "keyword": z.string().describe("关键词").optional(),
  "page_num": z.string().describe("页码，默认第一页").optional(),
  "page_size": z.string().describe("分页数，默认每页10个").optional(),
  "app_origin": z.string().describe("业务来源，新接入方需要向支付宝申请专用来源，否则不予接入。https://yuque.antfin-inc.com/tinyapp-all/qddncu/bidushixiang").optional(),
  "include_offline": z.boolean().describe("是否需要展示offline状态插件，不传默认为false（不展示）").optional()
}