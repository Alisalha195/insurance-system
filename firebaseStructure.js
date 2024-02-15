
//..[Note] : all data in this file are dummy data for demonstratoin...


//........BuisnessOwners........
//...each document is a Buisness Owner....
//...userID is the Buisness Owner ID....

	BuisnessOwners = {
		userID : "sdfsdfsdfsagrafrhdsf" ,
		firstName : "John" ,
		lastName : "Doye" ,
		birthDate: "12/4/1980" ,
		email: "john@gmail.com" ,
		password: "john1234"
	}


//....... Companies ........
//...each document is a company....
//...document ID is the Company ID....
	Companies = {
		userID: "sdfsdfsdfsagrafrhdsf" ,
		name: "companyName" ,
		field : "software" ,
		address: "city North" ,
		sections: [
			{
				id:0 ,
				name:"Testing"
			} , 
			{
				id:1 ,
				name:"Production"
			}	
		]

	} 

//........Employees........
//...each document is an Employee....
//...userID is the Employee ID....

	Employees = {
		userID : "hjhkhjkhjkkkhy" ,
		firstName : "Dani" ,
		lastName : "Wilson" ,
		birthDate: "12/4/1980" ,
		email: "dani@gmail.com" ,
		password: "dani1234"
	}

//........EmployeeServices........
//...each document is a service belongs to an Employee....
//...if (startDate = endDate ) then the service in not finished...

	EmployeeServices = {
		companyID : "hjvbjkkkhy" ,
		employeeID: "hjhkhjkhjkkkhy" ,
		startDate: "5/1/2000" ,
		endDate: "5/1/2000" ,
		isPaid: false ,
		isFinished : false
		
	}
