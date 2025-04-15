import { z } from "zod"

export const inputParams = {
  "target_app_id": z.string().describe("目标isv应用ID").optional(),
  "content_md_5": z.string().describe("模版文件的md5值。示例代码参见 <a href=\"https://opendocs.alipay.com/mini/00arl2#%E5%88%9B%E5%BB%BA%E5%90%88%E5%90%8C%E6%A8%A1%E6%9D%BF\">创建合同模板</a>").optional(),
  "content_type": z.string().describe("目标文件的MIME类型。示例代码参见 <a href=\"https://opendocs.alipay.com/mini/00arl2#%E5%88%9B%E5%BB%BA%E5%90%88%E5%90%8C%E6%A8%A1%E6%9D%BF\">创建合同模板</a>").optional(),
  "convert_to_pdf": z.string().describe("是否需要转成pdf，如果模板文件为.doc/.docx 传true，为pdf传false").optional(),
  "file_name": z.string().describe("文件名称，必须带上文件扩展名如 .pdf、.doc、.docx，否则会导致后续发起流程校验异常。").optional()
}