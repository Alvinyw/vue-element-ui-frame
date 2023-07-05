import request from '@/utils/request'

/**
 * 模版明细查询
 * @param {parm1} 参数1
 */
export function perPageTemplateQry(data) {
  return request({
    url: '/perPageTemplateQry.do',
    method: 'post',
    data,
  })
}

/**
 * 模版新增
 * @param {parm1} 参数1
 */
 export function perPageTemplateAdd(data) {
  return request({
    url: '/perPageTemplateAdd.do',
    method: 'post',
    data,
  })
}

/**
 * 模版明细查询
 * @param {parm1} 参数1
 */
 export function perPageTemplateDel(data) {
  return request({
    url: '/perPageTemplateDel.do',
    method: 'post',
    data,
  })
}

/**
 * 模版明细查询
 * @param {parm1} 参数1
 */
 export function perPageTemplateUpd(data) {
  return request({
    url: '/perPageTemplateUpd.do',
    method: 'post',
    data,
  })
}