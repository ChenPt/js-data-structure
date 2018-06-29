import LinkedListNode from '../LinkedListNode'

describe('测试Node', () => {
  it('返回一个value', () => {
    let linkedListNode = new LinkedListNode(1)

    expect(linkedListNode.toStringOfNode()).toBe('1')
  })
})
