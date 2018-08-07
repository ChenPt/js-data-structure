import LinkedList from '../LinkedList'

//开始一个测试

var linkedList = new LinkedList()
describe('测试append', () => {
  it('测试结果长度', () => {
    linkedList.append(2)
    //断言 toBe()是期望获得的结果
    expect(linkedList.length).toBe(1)
  })
  it('测试结果', () => {
    expect(linkedList.tail.value).toBe(2)
  })
})
describe('测试prepend', () => {
  it('测试结果长度', () => {
    linkedList.prepend(1)
    expect(linkedList.length).toBe(2)
  })
  it('测试结果', () => {
    expect(linkedList.head.value).toBe(1)

    // 对于Object类型，toBe内部是使用`Object.is`来判断是否相等的。报错如下
    // Note that you are testing for equality with the stricter `toBe` matcher using `Object.is`. For deep equality only, use `toEqual` instead
    // 而Object.is 对于比较的值只有两个值都指向同一个对象才会返回true，否则返回false
    // 如果测试结果是对象的话，则使用toEqual
    expect(linkedList.head.next).toEqual({ value: 2, next: null })
  })
})

describe('测试find', () => {
  it('测试结果', () => {
    expect(linkedList.find(1).value).toBe(1)
  })
})

describe('测试delete', () => {
  it('空链表情况下删除', () => {
    let linkedList = new LinkedList()
    expect(linkedList.delete(0)).toEqual(null)
  })

  it('删除链表头', () => {
    let linkedList = new LinkedList()
    linkedList.append(1).append(2).append(3)
    linkedList.delete(1)
    expect(linkedList.head).toEqual({value: 2,next: {value: 3,next: null}})
  })

  it('删除链表尾', () => {
    let linkedList = new LinkedList()
    linkedList.append(1).append(2).append(3)
    linkedList.delete(3)
    expect(linkedList.tail).toEqual({value: 2, next: null})
  })

  it('删除链表中间元素', () => {
    let linkedList = new LinkedList()
    linkedList.append(1).append(2).append(3)
    linkedList.delete(2)
    expect(linkedList).toEqual({
      head: {
        value: 1,
        next: {
          value: 3,
          next: null
        }
      },
      tail: {
        value: 3,
        next: null
      },
      length: 2
    })
  })
})
