import LinkedList from '../LinkedList'

describe('测试LinkedList append', function () {
  it('返回一个list', function () {
    const linkedList = new LinkedList()
    expect(linkedList.toString()).toBe('')
  })
})