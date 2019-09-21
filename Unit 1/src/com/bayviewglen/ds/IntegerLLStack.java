package com.bayviewglen.ds;

public class IntegerLLStack implements IntegerStack {
	private IntegerNode head;
	
	public IntegerLLStack() {
		head = null;
	}
	
	public Integer peek() {
		if(isEmpty()) 
			throw new IllegalStateException();
		return head.data;
	}

	public void push(Integer el) {
		head = new IntegerNode(el, head);
	}

	public Integer pop() {
		if(isEmpty()) 
			throw new IllegalStateException();
		int x = peek();
		head = head.link;
		return x;
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


