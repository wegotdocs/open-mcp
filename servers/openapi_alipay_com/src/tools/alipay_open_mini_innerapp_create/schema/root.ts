import { z } from "zod"

export const inputParams = {
  "app_category_ids": z.string().describe("小程序类目，二级类目与三级类目下划线隔开，最多可以选择3个类目，类目之间以;隔开").optional(),
  "app_desc": z.string().describe("小程序描述，20-200个字符").optional(),
  "app_english_name": z.string().describe("小程序英文名称，插件不填").optional(),
  "app_logo": z.string().describe("小程序logo").optional(),
  "app_name": z.string().describe("小程序名称").optional(),
  "app_origin": z.string().describe("来源的业务方,接入文档中申请的业务来源").optional(),
  "app_slogan": z.string().describe("小程序简介，在搜索透出,插件不需要填").optional(),
  "app_sub_type": z.string().describe("应用子类型").optional(),
  "app_type": z.string().describe("应用类型").optional(),
  "isv_app_id": z.string().describe("三方应用ID，仅在创建模板小程序时需要传入").optional(),
  "mini_app_id": z.string().describe("小程序ID，仅特殊场景使用，普通业务方无需关注该参数").optional(),
  "mini_category_ids": z.string().describe("新小程序前台类目，格式为 第一个一级类目_第一个二级类目;第二个一级类目_第二个二级类目_第二个三级类目，详细类目可以通过 https://docs.open.alipay.com/api_49/alipay.open.mini.category.query接口查询mini_category_list。使用后不再读取app_category_ids值，老前台类目将废弃").optional(),
  "pid": z.string().describe("创建的小程序所属的PID").optional(),
  "service_email": z.string().describe("邮箱，与客服电话二选一").optional(),
  "service_phone": z.string().describe("客服电话，插件不需要").optional()
}