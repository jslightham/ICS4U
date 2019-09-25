package com.bayviewglen.queue;

public class Driver {
	public static void main(String[] args) {
		IntegerLLQueue a = new IntegerLLQueue();
		
		a.enqueue(10);
		a.enqueue(100);
		a.enqueue(20);
		System.out.println(a.peek());
		System.out.println(a.dequeue());
		System.out.println(a.dequeue());
		System.out.println(a.peek());
		System.out.println(a.dequeue());
		
	}
}
