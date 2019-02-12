import request from '@/utils/request'/v1/product/add
// 【新增】
// /v1/product/add
// token 用户id
// name 产品名称
// parentId 产品类别
// status 状态

// 【编辑】
// /v1/product/edit
// token 用户id
// name 产品名
// parentId 产品类别
// status 状态
// productId 产品id

// 【显示产品列表】
// /v1/product/showList
// token 用户id
// pageNo 当前页
// pageSize 一页显示多少条
// name 产品名

// 【删除产品】
// /v1/product/delete
//   token 用户id
// productId 产品名

产品类别


// 【新增】
// /v1/productCategory/add
// token 用户id
// name 类别名
// parentId 父级
// status 状态

// 【修改】
// v1/productCategory/edit
// token 用户id
// name 产品类别名
// parentId 父级
// status 状态
// categoryId 类别a名

// 【显示产品类型】
// /v1/productCategory/showList
// token 用户id
// name 产品类型名称
// pageNo 当前页
// pageSize 一页多少条

// 【下拉框】
// /v1/productCategory/showCategoryName
// token 用户id

// 【删除】
// /v1/productCategory/delete
//   token 用户id
// categoryId 产品类型id
