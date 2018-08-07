import DobuleLinkedList from '../DobuleLinkedList'

var dobuleLinkedList

let initLinkedList = () => {
  dobuleLinkedList = new DobuleLinkedList()
}

beforeEach(() => {
  initLinkedList()
})

describe('测试append', () => {
  it('空链表append的结果', () => {
    dobuleLinkedList.append(1)
    expect(dobuleLinkedList.length).toBe(1)
    expect(dobuleLinkedList.head).toEqual({value: 1, previous: null, next: null})
    expect(dobuleLinkedList.tail).toEqual({value: 1, previous: null, next: null})
  })
  it('链表append的结果', () => {
    var one = {
      value: 1,
      previous: null,
      next: {
        value: 2,
        previous: null,
        next: null
      }
    }
    var two = {
      value: 2,
      previous: null,
      next: null
    }
    one.next = two
    two.previous = one

    dobuleLinkedList.append(1).append(2)
    expect(dobuleLinkedList.length).toBe(2)
    expect(dobuleLinkedList.head).toEqual(one)
    expect(dobuleLinkedList.tail).toEqual(two)
  })
})

describe('测试prepend', () => {
  it('空链表prepend', () => {
    var node = {value: 1, previous: null, next: null}
    dobuleLinkedList.prepend(1)
    expect(dobuleLinkedList.length).toBe(1)
    expect(dobuleLinkedList.head).toEqual(node)
    expect(dobuleLinkedList.tail).toEqual(node)
  })

  it('链表prepend', () => {
    var one = {
      value: 1,
      previous: null,
      next: {
        value: 2,
        previous: null,
        next: null
      }
    }
    var two = {
      value: 2,
      previous: null,
      next: null
    }
    one.next = two
    two.previous = one

    dobuleLinkedList.prepend(2).prepend(1)
    expect(dobuleLinkedList.length).toBe(2)
    expect(dobuleLinkedList.head).toEqual(one)
    expect(dobuleLinkedList.tail).toEqual(two)
  })
})

describe('测试find', () => {
  it('空链表find', () => {
    expect(dobuleLinkedList.find(0)).toBe(null)
  })
})

describe('测试delete', () => {
  it('空链表delete', () => {
    expect(dobuleLinkedList.delete(0)).toBe(null)
    expect(dobuleLinkedList.length).toBe(0)
  })

  it('链表delete', () => {
    var head = {
      value: 2,
      previous: null,
      next: null
    }
    var tail = {
      value: 3,
      previous: null,
      next: null
    }
    head.next = tail
    tail.previous = head
    dobuleLinkedList.append(1).append(2).append(3)
    dobuleLinkedList.delete(1)
    expect(dobuleLinkedList.length).toEqual(2)
    expect(dobuleLinkedList.head).toEqual(head)
    expect(dobuleLinkedList.tail).toEqual(tail)
  })
})

