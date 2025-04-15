import { z } from "zod"

export const inputParams = {
  "primary_industry_code": z.string().describe("服务窗消息模板所属主行业一/二级编码，参见 <a href=\"https://alipay.open.taobao.com/doc2/detail?treeId=197&docType=1&articleId=105043\">查看行业信息</a>。").optional(),
  "primary_industry_name": z.string().describe("服务窗消息模板所属主行业一/二级名称，参见 <a href=\"https://alipay.open.taobao.com/doc2/detail?treeId=197&docType=1&articleId=105043\">查看行业信息</a>。").optional(),
  "secondary_industry_code": z.string().describe("服务窗消息模板所属副行业一/二级编码，参见 <a href=\"https://alipay.open.taobao.com/doc2/detail?treeId=197&docType=1&articleId=105043\">查看行业信息</a>。").optional(),
  "secondary_industry_name": z.string().describe("服务窗消息模板所属副行业一/二级名称，参见 <a href=\"https://alipay.open.taobao.com/doc2/detail?treeId=197&docType=1&articleId=105043\">查看行业信息</a>。").optional()
}