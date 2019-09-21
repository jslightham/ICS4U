/*
	 * N-Queens Stack Class 
	 * An array stack class that stores queens.  
	 * Author: Johnathon Slightham
	 * Date: 2019-09-20
*/

package com.bayviewglen.nqueens;

public class Stack implements QStack{
	private Queen[] data;
	private int manyItems;

	public Stack(int n) {
		data = new Queen[n];
		manyItems = 0;
	}
	public Queen peek() {
		if(isEmpty()) 
			throw new IllegalStateException();
		return data[manyItems - 1];
	}

	public void push(Queen el) {
		data[manyItems++] = el;
	}

	public Queen pop() {
		if(isEmpty()) 
			throw new IllegalStateException();
		return data[--manyItems];
	}

	public boolean isEmpty() {
		return manyItems == 0;
	}
	public int getManyItems() {
		return manyItems;
	}
}

interface QStack {
	public abstract Queen peek();
	public abstract void push(Queen el);
	public abstract Queen pop();
	public abstract boolean isEmpty();
}