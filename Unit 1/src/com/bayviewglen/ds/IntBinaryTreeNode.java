package com.bayviewglen.ds;

public class IntBinaryTreeNode {
	private int data;
	private IntBinaryTreeNode leftChild;
	private IntBinaryTreeNode rightChild;
	
	public IntBinaryTreeNode(int data, IntBinaryTreeNode leftChild, IntBinaryTreeNode rightChild) {
		super();
		this.data = data;
		this.leftChild = leftChild;
		this.rightChild = rightChild;
	}
	
	public IntBinaryTreeNode(int data) {
		super();
		this.data = data;
		this.leftChild = null;
		this.rightChild = null;
	}
	
	public boolean hasLeft(){
		return leftChild != null;
	}
	
	public boolean hasRight(){
		return rightChild != null;
	}
	
	public int getData() {
		return data;
	}
	public void setData(int data) {
		this.data = data;
	}
	public IntBinaryTreeNode getLeftChild() {
		return leftChild;
	}
	public void setLeftChild(IntBinaryTreeNode leftChild) {
		this.leftChild = leftChild;
	}
	public IntBinaryTreeNode getRightChild() {
		return rightChild;
	}
	public void setRightChild(IntBinaryTreeNode rightChild) {
		this.rightChild = rightChild;
	}
	
	
	
	
}
