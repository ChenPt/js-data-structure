import DobuleLinkedListNode from './DobuleLinkedListNode'

export default class DobuleLinkedList {
  constructor() {
    /**@var DobuleLinkedListNode**/
    this.head = null // 头部指针
    this.tail = null // 尾部指针
    this.length = 0
  }
  /**
   * @param {*} value
   * @return { DobuleLinkedList }
  */
  prepend (value) {
    const Node = new DobuleLinkedListNode(value, this.head, null)

    // 当链表不为空时
    if (this.head) {
      this.head.previous = Node // 将前插的结点作为链表的head
    }
    this.head = Node

    if (!this.tail) {
      this.tail = Node
    }

    this.length++
    return this
  }

  /**
   * @return {DobuleLinkedListNode}
   * @param {*} value
   */
  append (value) {
    // Node.previous === this.tail
    const Node = new DobuleLinkedListNode(value, null, this.tail)

    if (this.tail) {
      this.tail.next = Node
    }
    if (!this.head) {
      this.head = Node
    }

    this.tail = Node

    this.length++

    return this
  }

  delete (value) {
    var currentNode = this.find(value)
    var deleteNode = currentNode
    if (currentNode) {
      if (currentNode.previous) {
        currentNode.previous.next = currentNode.next
      }
      if (currentNode.next) {
        currentNode.next.previous = currentNode.previous
      }
      if (this.head === currentNode) {
        this.head = currentNode.next
      }
      if (this.tail === currentNode) {
        this.tail = currentNode.previous
      }
      currentNode = null
      this.length--
    }

    return deleteNode
  }

  /**
   * @param {*} value
   * @return {DobuleLinkedListNode | null} currentNode
   */
  find (value) {
    var currentNode = this.head

    while (currentNode && currentNode.value !== value) {
      currentNode = currentNode.next
    }

    return currentNode
  }

  toArray () {
    let nodes = []
    let currentNode = this.head

    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }

    return nodes
  }
}
