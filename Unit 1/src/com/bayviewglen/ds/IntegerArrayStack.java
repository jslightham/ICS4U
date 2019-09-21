package com.bayviewglen.ds;

public class IntegerArrayStack implements IntegerStack{
	private Integer[] data;
	private int manyItems;

	public IntegerArrayStack() {
		data = new Integer[100];
		manyItems = 0;
	}
	public Integer peek() {
		if(isEmpty()) 
			throw new IllegalStateException();
		return data[manyItems - 1];
	}

	public void push(Integer el) {
		data[manyItems++] = el;
		
	}

	public Integer pop() {
		if(isEmpty()) 
			throw new IllegalStateException();
		return data[--manyItems];
	}

	public boolean isEmpty() {
		return manyItems == 0;
	}
}