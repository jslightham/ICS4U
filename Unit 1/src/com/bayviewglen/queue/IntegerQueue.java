package com.bayviewglen.queue;

public interface IntegerQueue {
	public abstract void enqueue(Integer el);
	public abstract Integer dequeue();
	public abstract Integer peek();
	public abstract void clear();
	public abstract boolean isEmpty();
}
