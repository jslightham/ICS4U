package com.bayviewglen.contactlistarrays;

import java.util.Scanner;

public class AddressBookDriver {

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		AddressBook contacts = new AddressBook();
		
		
		
		while(true) {
			System.out.print("Type add, display, search, or delete: ");
			String temp = in.nextLine();
			switch(temp) {
			  case "add":
				 System.out.print("Please enter the first name: ");
				 String fname = in.nextLine();
				 System.out.print("Please enter the last name: ");
				 String lname = in.nextLine();
				 System.out.print("Please enter the phone number: ");
				 String phone = in.nextLine();
				 contacts.add(fname, lname, phone);
				 System.out.println("Contact Added!");
				 break;
			  case "display":
				  contacts.display();
				  break;
			  
			  case "search":
				  System.out.print("Enter last name to search for: ");
				  String sname = in.nextLine();
				  
				  Contact c = contacts.search(sname);
				  if(c == null) {
					  System.out.println("No contact found with that last name!");
				  }else {
				  System.out.println("Contact " + c.getLastName() + ":");
				  System.out.println("First Name: " + c.getFirstName() + " Last Name: " + c.getLastName() + " Phone Number: " + c.getPhone());
				  System.out.println();
				  }
				  break;
			  
			  case "delete":
				  System.out.print("Enter last name to delete contact of: ");
				  String dname = in.nextLine();
				  contacts.delete(dname);
				  break;
				  
			  default:
				  System.out.println("I don't know what you mean");
			      break;
			}
		}
	}

}
