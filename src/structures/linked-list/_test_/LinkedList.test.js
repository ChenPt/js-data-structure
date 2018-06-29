import LinkedList from '../LinkedList'

//开始一个测试
describe('测试LinkedList append', () => {
  // it  新建一个测试用例
  it('返回一个list', () => {
    const linkedList = new LinkedList()
    //断言 toBe()是期望获得的结果
    expect(linkedList.toArray()).toBe('[object Object]')
  })
})