const useDictStore = defineStore(
  'dict',
  {
    state: () => ({
      dict: []
    }),
    actions: {
      // 获取字典
      getDict(_key) {
        if (_key == null && _key === '') {
          return null
        }
        try {
          for (let i = 0; i < this.dict.length; i++) {
            if (this.dict[i].key === _key) {
              return this.dict[i].value
            }
          }
        } catch (e) {
          return null
        }
      },
      // 设置字典
      setDict(_key, value) {
        if (_key !== null && _key !== '') {
          this.dict.push({
            key: _key,
            value: value
          })
        }
      }
    }
  })

export default useDictStore
