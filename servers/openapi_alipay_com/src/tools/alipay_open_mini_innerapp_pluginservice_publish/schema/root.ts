import { z } from "zod"

export const inputParams = {
  "ability_type_list": z.array(z.string()).describe("功能类型，目前支持的有：1039支付, 1040会员, 1041基础, 1056资金, 1058信用, 1111口碑, 330120安全, 360101营销").optional(),
  "app_logo": z.string().describe("服务发布logo").optional(),
  "app_origin": z.string().describe("业务来源").optional(),
  "description": z.string().describe("服务描述").optional(),
  "detail_for_client": z.string().describe("移动端详情，用于能力中心展示").optional(),
  "detail_for_pc": z.string().describe("pc端详情，用于能力中心展示").optional(),
  "mini_app_id": z.string().describe("插件id").optional(),
  "sell_crowd": z.string().describe("可订购人群，1003个人, 1004企业，-1无限制").optional(),
  "show_type": z.string().describe("发布后是否展示，01展示（默认）、02隐藏").optional(),
  "title": z.string().describe("服务标题").optional(),
  "visit_url_for_pc": z.string().describe("pc端url地址，不需要则为空").optional()
}