package com.bayviewglen.contactlistarrays;

public class AddressBook {

	private Contact[] book;
	public AddressBook() {
		book = new Contact[0];
	}
	
	public void add(String firstName, String lastName, String phone) {
		Contact[] temp = book;
		book = new Contact[temp.length + 1];
		for(int i = 0; i<temp.length; i++) {
			book[i] = temp[i];
		}
		book[book.length - 1] = new Contact(firstName, lastName, phone);
	}
	
	public void display() {
		for(int i=0; i<book.length; i++) {
			if(book[i] != null) {
			System.out.println("Contact " + i + ":");
			System.out.println("First Name: " + book[i].getFirstName() + " Last Name: " + book[i].getLastName() + " Phone Number: " + book[i].getPhone());
			System.out.println();
			}
		}
	}
	
	public Contact search(String sname) {
		for(int i =0; i<book.length; i++) {
			if(sname.equals(book[i].getLastName())) {
				return book[i];				
			}
		}
		return null;
	}
	
	public void delete(String lname) {
		int delIndex = -1;
		for(int i =0; i<book.length; i++) {
			if(lname.equals(book[i].getLastName())) {
				delIndex = i;
				book[i] = null;
			}
		}
		
		if(delIndex == -1) {
			System.out.println("No contact found");
		}else {
			System.out.println("Contact Deleted");
		}
		
	}
}
