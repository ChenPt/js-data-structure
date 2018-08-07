import LinkedListNode from '../LinkedListNode'

test('测试Node', () => {
  let linkedListNode = new LinkedListNode(1)
  expect(linkedListNode).toEqual({value: 1, next: null})
})
