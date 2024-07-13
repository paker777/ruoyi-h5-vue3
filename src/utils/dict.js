import useDictStore from '@/store/modules/dict'
import { getDicts } from '@/api/system/dict'

/**
 * 获取字典数据
 */
export function useDict(...dictArr) {
  const dictStore = useDictStore()
  const res = ref({})
  return (() => {
    dictArr.forEach(dictType => {
      res.value[dictType] = []
      const dicts = dictStore.getDict(dictType)
      if (dicts) {
        res.value[dictType] = dicts
      } else {
        getDicts(dictType).then(resp => {
          res.value[dictType] = resp.data.map(i => ({ label: i.dictLabel, value: i.dictValue }))
          dictStore.setDict(dictType, res.value[dictType])
        })
      }
    })
    return toRefs(res.value)
  })()
}
