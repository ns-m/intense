/*
Создайте очередь, в которой буду реализованы операции на добавление элементов в конец очереди, 
удаление первого элемента и вычисление размера очереди с сложностью алгоритма О(1)
*/

class Queue {
    constructor() {
        // todo
    }
    
    enqueue(item) {
        // todo: добавить элемент в конец очереди
    }
  
    dequeue() {
        // todo: удалить первый элемент из очереди
    }
  
    get size() {
        // todo: возвращает размер списка
				// нельзя использовать геттер
    }
}

class LinkedList {
    #length = 0
  
    constructor() {
      this.head = null
      this.tail = null
    }
  
    addToTail(value) {
      const node = {
        value,
        next: null
      }
  
      if (this.#length === 0) {
        this.head = node
        this.tail = node
      } else {
        this.tail = node
      }
  
      this.#length++
    }
  
    removeFromHead() {
      if (this.#length === 0) {
        return
      }
  
      const value = this.head.value
  
      this.head = this.head.next
      this.#length--
  
      return value
    }
  
    size() {
      return this.#length
    }
  }
  
  
  class Queue extends LinkedList {
    constructor() {
      super()
  
      this.enqueue = this.addToTail
      this.dequeue = this.removeFromHead
    }
  
    get size() {
      return super.size()
    }
  }

  class Queue {
    #storage = {}
    #last = 0
    #first = 0
  
    enqueue(item) {
      this.#storage[this.#last] = item
      this.#last++
    }
  
    dequeue() {
      if (this.size === 0) {
        return
      }
  
      const value = this.#storage[this.#first]
      delete this.#storage[this.#first]
      this.#first++
      return value
    }
  
    get size() {
      return this.#last = this.#first
    }
  }