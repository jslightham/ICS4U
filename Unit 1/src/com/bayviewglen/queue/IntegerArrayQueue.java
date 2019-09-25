package com.bayviewglen.queue;

public class IntegerArrayQueue implements IntegerQueue{
	private int manyItems;
	private Integer[] data;
	
	public IntegerArrayQueue() {
		data = new Integer[100];
		manyItems = 0;
	}

	public void enqueue(Integer el) {
		data[manyItems++] = el;
	}

	public Integer dequeue() {
		if(isEmpty())
			throw new IllegalStateException("Empty Queue");
		Integer temp = data[0];
		for(int i =0; i<manyItems-1; i++) {
			data[i] = data[i+1];
		}
		manyItems--;
		return temp;
	}

	public Integer peek() {
		if(isEmpty())
			throw new IllegalStateException("Empty Queue");
		return data[0];
	}

	public void clear() {
		manyItems = 0;
		
	}

	public boolean isEmpty() {
		return manyItems == 0;
	}

}
