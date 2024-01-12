const employees = [
	{
		name : "Rani" ,
		age : "40" ,
		nationalNumber : "06020034651",
		insuranceNumber : "3935109",
	}	,
	{
		name: "john",
		age: "34",
		nationalNumber: "06020047032",
		insuranceNumber: "3935110",
	},
	{
		name: "karla",
		age: "32",
		nationalNumber: "06020072394",
		insuranceNumber: "3935111",
	},
	
	
]

const Employees = (  ) => {
  return (  
  	<ul>{
	  	employees.map((emp , index)=>{
	  		return(
		  		<li key={index}>
		  			<h3>{emp.name}</h3>
		  		</li>
	  		)
	  	})
	  	}
  	</ul>
  )
}
export default Employees