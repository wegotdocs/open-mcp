import { z } from "zod"

export const inputParams = {
  "target_app_id": z.string().describe("目标isv应用ID").optional(),
  "content_md_5": z.string().describe("先计算文件md5值，在对该md5值进行base64编码").optional(),
  "content_type": z.string().describe("目标文件的MIME类型").optional(),
  "file_name": z.string().describe("文件名称。\t注意：必须带上文件扩展名，不然会导致后续发起流程校验不通过。示例：合同.pdf。").optional(),
  "file_size": z.number().int().describe("文件大小，单位byte。最大允许上传30Mb").optional()
}