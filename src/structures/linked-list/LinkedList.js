import LinkedListNode from './LinkedListNode'
export default class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  append (value) {
    let newNode = new LinkedListNode(value)

    if (this.tail && this.head) {
      this.tail.next = newNode
      this.tail = newNode
    } else {
      this.head = newNode
      this.tail = newNode
    }

    this.length++

    return this
  }
  /**
   * @method 删除某个结点
   * @param {*} value
   * @return {LinkedList}
   */
  delete (value) {
    let currentNode = this.head
    let preNode = null
    let deletedNode = null

    while (currentNode) {
      if (currentNode.value === value) {
        if (currentNode === this.head) {
          this.head = this.head.next
        }
        if (currentNode === this.tail) {
          this.tail = preNode
          preNode.next = null
        }
        if (preNode) {
          preNode.next = currentNode.next
        }
        deletedNode = currentNode
        currentNode = null
        this.length--

        return deletedNode
      }

      preNode = currentNode
      currentNode = currentNode.next
    }

    return deletedNode
  }

  /**
   * @method 在链表头插入新元素
   * @param {*} value
   * @return {LinkedList}
   */
  prepend (value) {
    let newNode = new LinkedListNode(value)

    //链表为空
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      this.length++

      return this
    }

    newNode.next = this.head
    this.head = newNode
    this.length++

    return this
  }
  // 找寻某个结点
  find (value) {
    var currentNode = this.head

    while (currentNode.value !== value && currentNode) {
      currentNode = currentNode.next
    }

    return currentNode
  }

  /**
   * @return {Array} 存储着每个节点value值的数组
   */
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
