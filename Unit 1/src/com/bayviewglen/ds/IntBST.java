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


    public void delete(Integer data) {
 
        delete(this.root, data);
    }
 
    public IntBinaryTreeNode delete(IntBinaryTreeNode node, Integer data) {
        // will run if tree is empty, or when data is not found in 
        if(node == null) 
            return node;
        // set node to returned value through recusion
        if(data < node.getData()) {
            node.setLeftChild(delete(node.getLeftChild(), data));
        } else if(data > node.getData()) {
            node.setRightChild(delete(node.getRightChild(), data));
        } 
        else { // else runs when data = node.getData(), one of 4 possibilities
            // no children, set to null (bottom of tree)
            if(node.getLeftChild() == null && node.getRightChild() == null) {
                return null;
            } 
            // only right child, set node to child
            else if(node.getLeftChild() == null) {
                return node.getRightChild();
            } 
            // only left child, set node to child
            else if(node.getRightChild() == null) {
                return node.getLeftChild();
            } 
            // when two children
            else {
                // get minimum value of tree starting at node
                int min = minValue(node.getRightChild());
                // set node to minimum child value
                node.setData(min);
                // delete smallest child (should be the first case)
                node.setRightChild(delete(node.getRightChild(), min));
            }
        }
 
        return root;
    }

    public Integer minValue(IntBinaryTreeNode node) {
 
        if(node.getLeftChild() != null) {
            return minValue(node.getLeftChild());
        }
        return node.getData();
    }
    
}