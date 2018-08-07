import LinkedListNode from '../linked-list/LinkedListNode'

export default class DobuleLinkedListNode {
  constructor(value, next, previous) {
    // 每一个结点都有三个域，指向前一个结点的指针，实际值，指向后一个结点的指针
    this.value = value
    this.next = next
    this.previous = previous
  }
}
