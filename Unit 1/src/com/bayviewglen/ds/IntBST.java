package com.bayviewglen.ds;
public class IntBST{
    private IntBinaryTreeNode root;

    public IntBST(){
        root = null;
    }

    public void addInteger(int data){
        if(root == null)
            root = new IntBinaryTreeNode(data);
        else{
            addInteger(root, data);
        }
    }

    public void addInteger(IntBinaryTreeNode node, int data){
        if(data < node.getData()){
            if(node.hasLeft())
                addInteger(node.getLeftChild(), data);
            else
                node.setLeftChild(new IntBinaryTreeNode(data));
        }else{
            if(node.hasRight())
            addInteger(node.getRightChild(), data);
            else
             node.setRightChild(new IntBinaryTreeNode(data));
        }
    }


    public void processNode(IntBinaryTreeNode node){
        System.out.println(node.getData());
    }

    public void preOrderTraversal(){
        preOrderTraversal(root);
    }

    public void preOrderTraversal(IntBinaryTreeNode node){
        processNode(node);
        if(node.hasLeft())
            preOrderTraversal(node.getLeftChild());
        if(node.hasRight())
            preOrderTraversal(node.getRightChild());

    }

    public void postOrderTraversal(){
        postOrderTraversal(root);
    }

    public void postOrderTraversal(IntBinaryTreeNode node){
        if(node.hasLeft())
            postOrderTraversal(node.getLeftChild());
        if(node.hasRight())
            postOrderTraversal(node.getRightChild());
        processNode(node);
    }

    public void inOrderTraversal(){
        inOrderTraversal(root);
    }

    public void inOrderTraversal(IntBinaryTreeNode node){
        if(node.hasLeft())
            inOrderTraversal(node.getLeftChild());
        processNode(node);
        if(node.hasRight())
            inOrderTraversal(node.getRightChild());
    }

    public IntBinaryTreeNode deleteThing(int n){
        return deleteThing(n, root, null);
    }

    
}