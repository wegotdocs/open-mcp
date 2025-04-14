import { z } from "zod"

export const inputParams = {
  "build_extra_info": z.string().describe("扩展信息，比如adaptorName、tinycliVersion、tinycliName、import-module、allowPrecompile、extJson、allowInstallDependency、aggregationMainAppId，如果没有特殊要求，tinycliVersion版本请用最新的： https://registry.npm.alibaba-inc.com/@alipay/tiny-cli/huoban-prod").optional(),
  "build_js_permission": z.string().describe("jsapi权限文件").optional(),
  "build_main_url": z.string().describe("小程序页面主入口。/index.html#page/component/index，该值需要和extendInfo中的page参数保持一致").optional(),
  "build_qcloud_info": z.string().describe("打包平台扩展信息").optional(),
  "build_version": z.string().describe("小程序版本").optional(),
  "builded_package_size": z.string().describe("已经构建过的amr包大小，单位是字节，建议如实填写").optional(),
  "builded_package_url": z.string().describe("已经构建的包地址，目前主要自行构建的场景使用").optional(),
  "builded_plugin_size": z.string().describe("构建好的插件包amr大小").optional(),
  "builded_plugin_url": z.string().describe("构建好的插件包地址").optional(),
  "bundle_id": z.string().describe("一个端的标识，用于区分不同的客户端，每接入一个客户端，都需要向小程序应用中心申请bundleId入驻").optional(),
  "components": z.string().describe("组件参数").optional(),
  "inst_code": z.string().describe("上传调试版的接入租户类型").optional(),
  "mini_app_id": z.string().describe("小程序id").optional(),
  "new_builded_package_size": z.string().describe("2.0已经构建过的amr包大小，单位是字节，主要是给自行构建的场景使用").optional(),
  "new_builded_package_url": z.string().describe("2.0产物包地址").optional(),
  "new_builded_plugin_size": z.string().describe("构建好的插件包amr大小").optional(),
  "new_builded_plugin_url": z.string().describe("构建好的插件包地址").optional(),
  "no_sign": z.boolean().describe("否免加签, true的时候代表传过来的是加签后的包地址").optional(),
  "plugin_refs": z.array(z.object({ "lazy": z.boolean().describe("是否懒加载").optional(), "plugin_id": z.string().describe("插件id，即插件的唯一标识，形如小程序的appId").optional(), "plugin_lazy": z.boolean().describe("是否懒加载").optional(), "plugin_version": z.string().describe("小程序引用的插件版本，可以指定插件版本，如：1.0.11；也可以填*，表示引用最新的插件版本，此时，当插件发布新版本后，小程序内的插件会自动更新到最新的版本。").optional() })).describe("小程序代码中引用的插件列表，包含插件id和插件版本信息，业务方需要自行解析源码包的app.json里面的plugins信息").optional(),
  "sub_packages": z.array(z.object({ "builded_package_url": z.string().describe("构建好的结果地址").optional(), "new_builded_package_url": z.string().describe("构建好的分包地址").optional(), "new_size": z.string().describe("2.0分包大小，单位字节").optional(), "path": z.string().describe("分包路径").optional(), "size": z.string().describe("分包大小，单位字节").optional(), "source_url": z.string().describe("源码地址").optional(), "type": z.string().describe("分包类型： MAIN ｜ SUB").optional() })).describe("构建好的分包信息").optional()
}