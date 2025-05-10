import { z } from "zod"

export const inputParams = {
  "column_name": z.string().describe("标签组名，商户自定义的标签固定为label_id_list，支付宝开放的标签详见<a href=\"http://aopsdkdownload.cn-hangzhou.alipay-pub.aliyun-inc.com/doc/FirstPartOfTagsFromAlipay.xlsx\">支付宝开放标签</a>").optional(),
  "op": z.string().describe("操作符，支持=、!=、in三个操作符；其中in表示是某几个标签中的一个").optional(),
  "values": z.array(z.string()).describe("标签数组，用于组装最后的表达式").optional()
}