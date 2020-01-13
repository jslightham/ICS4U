package com.bayviewglen.zigzag;

public class Main {

      public static void main(String[] args) {
             int[] sequence = {1, 7, 4, 9, 2, 5};
          System.out.println(maxZigZag(sequence));
             
      }
      
      public static int maxZigZag(int[] arr) {
             int maxLength = 0;
             // check if sequence length = 0
             if(arr.length == 0)
                   return 0;
             
             int lastSign = 0, length = 0;
             /*
              * Scan through array, keeping track of the previous sign, and the current maximum length.
              * Only cycles through the array once, and completes each calculation of sign, and maximum length once. 
              */
             for(int i = 1; i < arr.length; i++) {
            	 // Get the sign of the current element. Calculated only once per element.
                   int sign = getSign(arr[i] - arr[i-1]);
                   
                   // If the sequence continues, increment length by one, and store current sign previous.
                   if(sign != 0 && sign != lastSign) {
                	   	  // store the previous sign to be used next iteration
                          lastSign = sign;
                          length++;
                   }
                   // When the sequence fails, reset length to 0, update the maximum length, and store current sign as previous
                   else {
                          lastSign = sign;
                          // if the maximum length stored, is less than the current length, update it
                          if(maxLength < length)
                                maxLength = length;
                          length = 0;
                   }
             }
             // Once completed, check if the length of the final sequence is greater than the maximum.
             if(length > maxLength)
                   maxLength = length;
             
             // Add 1 since stored length is max length of signs of sequence, not length of sequence of numbers.
             return maxLength +1;
      }
      /*
       Easier to deal with signs when they denoted as ints.
       0 = 0
       + = 1
       - = -1
       */
      public static int getSign(int n) {
             if(n == 0) {
                   return 0;
             }else if(n > 0) {
                   return 1;
             }else {
                   return -1;
             }
      }
      
}

