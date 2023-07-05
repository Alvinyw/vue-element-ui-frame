import request from '@/utils/request'

/**
 * 模版明细查询
 * @param {parm1} 参数1
 */
export function perTemplateQry(data) {
  return request({
    url: '/perTemplateQry.do',
    method: 'post',
    data,
  })
}

/**
 * 模版新增
 * @param {parm1} 参数1
 */
 export function perTemplateAdd(data) {
  return request({
    url: '/perTemplateAdd.do',
    method: 'post',
    data,
  })
}

/**
 * 模版删除
 * @param {parm1} 参数1
 */
 export function perTemplateDel(data) {
  return request({
    url: '/perTemplateDel.do',
    method: 'post',
    data,
  })
}

/**
 * 模版更新
 * @param {parm1} 参数1
 */
 export function perTemplateUpd(data) {
  return request({
    url: '/perTemplateUpd.do',
    method: 'post',
    data,
  })
}