package com.bayviewglen.ds;

public class LLTest{

    public Node head;
    public Node tail;

    public void push(int data){
        Node n = new Node(data);

        n.prev = null;
        n.next = head;

        if(head != null){
            head.prev = n;
            head = n;
        }else{
            head = n;
            tail = n;
        }
    }

    public void insertAfter(Node prevNode, int data){
        if(prevNode == null){
            throw new NullPointerException("The given previous cannot be null");
        }

        Node n = new Node(data);

        n.next = prevNode.next;
        n.prev = prevNode.prev;

        prevNode.next = n;

        if(n.next != null){
            n.next.prev = n;
        }
    }

    public void append(int data){
        Node n = new Node(data);
        Node current = head;
        if(current == null){
            head = n;
            return;
        }
        while(current.next != null){
            current = current.next;
        }
        current.next = n;
        n.prev = current;

    }


    public Node delete(Node n){
        if(head == null || n == null){
            throw new IllegalStateException("Head or node cannot be null");
        }

        Node current = head;
        while(current != n && current != null){
            current = current.next;
        }

        if(current == null){
            return null;
        }else{
            if(current.prev != null)
                current.prev.next = current.next;
            if(current.next != null)
                current.next.prev = current.prev;
        }
        return current;
    }

    public class Node{
        int data;
        Node prev;
        Node next;
        Node(int data){
            this.data = data;
        }
    }

}

