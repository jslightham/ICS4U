package com.bayviewglen.ds;

public class LLTestDriver{
    public static void main(String[] args) {
        LLTest l = new LLTest();

        l.push(10);
        l.push(20);
        l.append(30);
        l.insertAfter(l.head.next, 15);
        l.delete(l.head.next.next);
    }

}