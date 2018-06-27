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
  append(value) {
    let newNode = new LinkedListNode(value)

    if (this.head) {
      this.head = newNode
      this.tail = newNode
      this.length++

      return this
    }

    // 将尾结点的next连接到新结点，更新尾结点
    this.tail.next = newNode
    this.tail = newNode
    this.length++

    return this
  }
  /**
   * 
   * @param {*} value
   * @return {LinkedList} 
   */
  delete(value) {
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
        }
        deletedNode = currentNode
        currentNode = null
        this.length--

        return  deletedNode
      }
      preNode = currentNode
      currentNode = currentNode.next
    }

    return deletedNode
  }

  /**
   * 
   * @param {*} value 
   * @return {LinkedList}
   */
  prepend(value) {
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

    return this
  }

  find(value) {
    // TODO: 从head指向的结点开始找起，直到到达tail指向的结点
    let length = this.length
    let currentNode = this.head
    for (let i = 0; i < length; i++, currentNode = currentNode.next) {
      if (currentNode.value === value) {
        return currentNode
      } 
    }
    return null
  }
}