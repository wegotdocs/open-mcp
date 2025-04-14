import { z } from "zod"

export const inputParams = {
  "start_time": z.string().describe("保证金流水创建时间的起始范围").optional(),
  "end_time": z.string().describe("保证金流水创建时间的结束范围。与起始时间间隔不超过31天。查询结果为起始时间至结束时间的左闭右开区间").optional(),
  "bail_type": z.string().describe("保证金类型，目前支持TMALL_S_BAIL-天猫保证金，TAOBAO_BAIL-淘宝保证金").optional(),
  "trans_log_id": z.string().describe("保证金流水号。如果查询参数中指定流水号，则只查询流水号相关的记录").optional(),
  "biz_orig_no": z.string().describe("业务基础订单号。如果查询参数中指定订单号，则只查询相关的记录").optional()
}