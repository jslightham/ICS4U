/*
	 * N-Queens Queen Class 
	 * Author: Johnathon Slightham
	 * Date: 2019-09-20
*/

package com.bayviewglen.nqueens;

public class Queen {
	private int row, col;
	public Queen(int row, int col) {
		this.row = row;
		this.col = col;
	}

	public void setRow(int row) {
		this.row = row;
	}
	
	public void setCol(int col) {
		this.col = col;
	}
	
	public int getRow() {
		return this.row;
	}
	public int getCol() {
		return this.col;
	}
	
	
}