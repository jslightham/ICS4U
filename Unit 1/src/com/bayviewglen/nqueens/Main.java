/*
	 * N-Queens Main Class 
	 * Contains all methods to solve N-Queens problem. 
	 * Author: Johnathon Slightham
	 * Date: 2019-09-20
*/

package com.bayviewglen.nqueens;

import java.util.Scanner;

public class Main {
	// Stack to hold current queens
	public static Stack qStack;
	// Stack to hold n value
	public static int n;
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		System.out.print("Enter N-Value: ");
		boolean isValidInput = false;
		/*
		 * Wait for valid n input
		 */
		while(!isValidInput) {
			try {
				n = Integer.valueOf(in.nextLine());
				isValidInput = true;
			}catch(Exception e) {

			}
		}
		// initialize Stack to length n
		qStack = new Stack(n);
		boolean failed = false;
		/*
		 * Try to place new queens, or shift queens as necessary.
		 * Keeps queens within boundary of stack/board size (-1, and n).
		 */
		while(qStack.getManyItems() > -1 && qStack.getManyItems() < n) {
			// Place a queen, if successful place the next, if not enter if statement.
			if(!placeQueen()) {
				try {
					// Shift over the previous queen to a spot without conflict,
					// if unsuccessful keep popping until able to shift any further. 
					while(!shiftQueen()) {
						qStack.pop();
					}
				}catch(Exception e) {
						failed = true;
						break;
					}
				}
			}
		if(!failed)
			printBoard();
		else
			System.out.println("No possible solutions");
	}
	
	/*
	 * Method that prints the current board.
	 */
	public static void printBoard() {
		for(int i = 0; i<n; i++) {
			Queen temp = qStack.pop();
			for(int j = 0; j<n; j++) {
				if(temp.getCol() == j) {
					System.out.print("Q ");
				}else {
					System.out.print(". ");
				}
			}
			System.out.println();
		}
	}
	
	/*
	 * Method that checks the passed in queen with all other queens on the board, to test for conflicts.
	 * This method iterates through the stack, by popping each queen into a temp stack each loop iteration.
	 * Checks current queen against col of all other queens on board by seeing if equal.
	 * Checks current queen's diagonals by checking if the absolute value of the col1 - col2 == row1 - row2.
	 * Returns true if conflicting, returns false if no conflicts. 
	 */
	
	public static boolean checkConflicts(Queen q) {
		boolean hasConflict = false;
		// add current queen to stack
		qStack.push(q);
		Stack temp = new Stack(n);
		try {
			temp.push(qStack.pop());
			// Go through stack until emptied into temp. 
			while(!qStack.isEmpty()) {
				// check for conflicts
				if(qStack.peek().getCol() == q.getCol() || Math.abs(qStack.peek().getCol() - q.getCol()) == Math.abs(qStack.peek().getRow() - q.getRow()))
					hasConflict = true; 
				// push the popped qStack value into temp, to iterate through
				temp.push(qStack.pop());
			}
		}catch(Exception e) {
			hasConflict = false;
		}
		// when finished empty temp back into qStack
		while(!temp.isEmpty()) {
			qStack.push(temp.pop());
		}
		// remove added value to qStack from testing
		qStack.pop();
		return hasConflict;
	}
	
	/*
	 * Method that attempts to create a queen in the next row (manyItems).
	 * Will place a queen at row = manyItems, col = 0, and shift until no conflict.
	 * If impossible to place a queen return false, if possible return true.
	 */
	public static boolean placeQueen() {
		Queen q = new Queen(qStack.getManyItems(), 0);
		
		boolean added = false;
		// loop until added or column is outside of board bounds. 
		while(!added && q.getCol() < n) {
			if(!checkConflicts(q)) {
				qStack.push(q);
				added = true;
				return true;
			}else {
				// if queen conflicts, move to next column
				q = new Queen(q.getRow(), q.getCol() +1);
				added = false;
			}
		}
		return added;
	}
	/*
	 * Method that moves over the previous queen to remove conflicts with new queen, until no conflict occurs. 
	 * Returns true if queen moved successfully, returns false if failed to move.
	 */
	public static boolean shiftQueen() {
		Queen q = new Queen(qStack.peek().getRow(), qStack.peek().getCol() + 1);
		boolean placed = false;
		// loop until queen placed, or column out of bounds
		while(!placed && q.getCol() < n) {
			if(!checkConflicts(q)) {
				// if new spot found, remove old queen and replace with new queen
				qStack.pop();
				qStack.push(q);
				placed = true;
				return true;
			}else {
				// if queen conflicts, move to next col
				q = new Queen(q.getRow(), q.getCol() + 1);
				placed = false;
			}
		}
		return placed;
	}
}
