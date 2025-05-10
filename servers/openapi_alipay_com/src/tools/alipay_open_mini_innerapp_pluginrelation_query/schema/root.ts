import { z } from "zod"

export const inputParams = {
  "mini_app_id_list": z.array(z.string()).describe("应用ID列表").optional(),
  "page_num": z.number().int().describe("页码").optional(),
  "page_size": z.number().int().describe("页大小").optional(),
  "plugin_id": z.string().describe("插件ID").optional(),
  "plugin_relation_status_list": z.array(z.string()).describe("插件使用关系状态，取值包括WORKING/WAIT_WORKING/STOP_WORKING/EXECUTING").optional(),
  "run_model_type": z.string().describe("运行类型，取值包括ONLINE/TRIAL/REVIEW/DEBUG").optional(),
  "show_beta_info": z.boolean().describe("是否展示邀测信息").optional()
}