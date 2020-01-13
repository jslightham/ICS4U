package com.bayviewglen.badneighbors;

public class Main {
	
	public static int[] donations = {8, 1, 1, 8, 1, 1, 8, 1, 1, 8, 1, 1};
	
	public static void main(String[] args) {
		System.out.println(solve());
	}
	
	/*
	 * Works by solving linearly twice, once ignoring the first, and once ignoring the second. 
	 * This works, since a solution can only ever contain either the first or last element.
	 * Once solved linearly, compare the two solutions to find the best one.
	 */
	public static int solve() {
		
		// Check if 0, 1, or 2 donors, as program will crash if it advances with less than 3. 
		if(donations.length == 0) {
			// if no donors, return 0
			return 0;
		}else if(donations.length < 2) {
			// if only one donor, return their donation amount
			return donations[0];
		}else if(donations.length < 3) {
			// if 2 donors return best of 2 donations
			return Math.max(donations[0], donations[1]);
		}
		
		/*
		 Solve with first element, and without last.
		 This will loop through the array of donations, and store the maximum donation at that point. 
		 The program each loop iteration decides if the previous max was better, or if the max from 2 calculations ago plus the current donation, is best.
		 */
		int[] solutions = new int[donations.length];
		solutions[0] = donations[0];
		solutions[1] = Math.max(donations[0], donations[1]);
		for(int i = 2; i < donations.length -1; i++) {
			solutions[i] = Math.max(donations[i] + solutions[i-2], solutions[i-1]);
		}
		
		/*
		 * Solve without first element, and with last.
		 * Same logic as previous loop.
		 */
		int[] solutions2 = new int[donations.length];
		solutions2[0] = donations[1];
		solutions2[1] = Math.max(donations[1], donations[2]);
		for(int i = 2; i < donations.length -1; i++) {
			solutions2[i] = Math.max(donations[i+1] + solutions2[i-2], solutions2[i-1]);
		}
		
		// Find the best of the two solutions.
		return Math.max(solutions[solutions.length-2], solutions2[solutions2.length-2]);
	}
	
	
}
