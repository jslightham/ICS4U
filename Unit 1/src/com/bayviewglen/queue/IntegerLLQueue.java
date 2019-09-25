package com.bayviewglen.queue;

public class IntegerLLQueue implements IntegerQueue{
	private IntegerNode head;
	
	public IntegerLLQueue() {
		head = null;
	}

	public void enqueue(Integer el) {
		IntegerNode current = head;
		try{
			while(current.link != null) {
				current = current.link;
			}
			current.link = new IntegerNode(el, null);
		}catch(Exception e){
			head = new IntegerNode(el, head);
		}
	}

	public Integer dequeue() {
		if(isEmpty()) 
			throw new IllegalStateException();
		int x = peek();
		head = head.link;
		return x;
	}

	public Integer peek() {
		if(isEmpty()) 
			throw new IllegalStateException();
		return head.data;
	}

	public void clear() {
		head = null;
		
	}

	public boolean isEmpty() {
		return head == null;
	}

	public class IntegerNode {
		private Integer data;
		private IntegerNode link;
		
		public Integer getData() {
			return data;
		}

		public void setData(Integer data) {
			this.data = data;
		}

		public IntegerNode getLink() {
			return link;
		}

		public void setLink(IntegerNode link) {
			this.link = link;
		}


		public IntegerNode(Integer data, IntegerNode link) {
			this.data = data;
			this.link = link;
		}
		
		
	}
}
