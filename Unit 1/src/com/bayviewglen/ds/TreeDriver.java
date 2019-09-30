package com.bayviewglen.ds;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class TreeDriver {
    public static void main(String[] args) throws FileNotFoundException {
        Scanner in = new Scanner(new File("C:/Users/sligh/Documents/ICS4U/Unit 1/tree.dat"));
        IntBST bst = new IntBST();
        while (in.hasNext()){
            bst.addInteger(in.nextInt());
        }
        bst.inOrderTraversal();
        bst.deleteThing(2);
        bst.inOrderTraversal();
        in.close();
    }

    

    

}