// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-agents',
//   templateUrl: './agents.component.html',
//   styleUrls: ['./agents.component.css']
// })
// export class AgentsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';

interface Agent {
  name: string;
  phone: string;
  email: string;
  location: string;
}

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
  cities: string[] = [
    'Mumbai', 'Delhi', 'Bengaluru', 'Chennai', 'Hyderabad',
    'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'
  ];

  selectedLocation: string = '';
  filteredAgents: Agent[] = [];

  agents: Agent[] = [];

  constructor() {}

  ngOnInit(): void {
    this.initializeAgents();
  }

  initializeAgents(): void {
    this.agents = [
      // Mumbai
      { name: 'Raj Mehta', phone: '9876543210', email: 'rajmehta@gmail.com', location: 'Mumbai' },
      { name: 'Priya Desai', phone: '9823456789', email: 'priyadesai@gmail.com', location: 'Mumbai' },
      { name: 'Amit Shah', phone: '9812345678', email: 'amitshah@gmail.com', location: 'Mumbai' },
      { name: 'Neha Kapoor', phone: '9834567890', email: 'nehakapoor@gmail.com', location: 'Mumbai' },

      // Delhi
      { name: 'Ravi Verma', phone: '9871234567', email: 'raviverma@gmail.com', location: 'Delhi' },
      { name: 'Simran Kaur', phone: '9819876543', email: 'simrankaur@gmail.com', location: 'Delhi' },
      { name: 'Manish Gupta', phone: '9827654321', email: 'manishgupta@gmail.com', location: 'Delhi' },
      { name: 'Anjali Singh', phone: '9832123456', email: 'anjalisingh@gmail.com', location: 'Delhi' },

      // Bengaluru
      { name: 'Kiran Rao', phone: '9845678901', email: 'kiranrao@gmail.com', location: 'Bengaluru' },
      { name: 'Deepa Nair', phone: '9856789012', email: 'deepanair@gmail.com', location: 'Bengaluru' },
      { name: 'Suresh Reddy', phone: '9867890123', email: 'sureshreddy@gmail.com', location: 'Bengaluru' },
      { name: 'Meena Joshi', phone: '9878901234', email: 'meenajoshi@gmail.com', location: 'Bengaluru' },

      // Chennai
      { name: 'Arun Kumar', phone: '9889012345', email: 'arunkumar@gmail.com', location: 'Chennai' },
      { name: 'Lakshmi Iyer', phone: '9890123456', email: 'lakshmiiyer@gmail.com', location: 'Chennai' },
      { name: 'Vijay Menon', phone: '9801234567', email: 'vijaymenon@gmail.com', location: 'Chennai' },
      { name: 'Divya Ramesh', phone: '9812345678', email: 'divyaramesh@gmail.com', location: 'Chennai' },

      // Hyderabad
      { name: 'Anil Reddy', phone: '9823456789', email: 'anilreddy@gmail.com', location: 'Hyderabad' },
      { name: 'Sneha Rao', phone: '9834567890', email: 'sneharao@gmail.com', location: 'Hyderabad' },
      { name: 'Ramesh Goud', phone: '9845678901', email: 'rameshgoud@gmail.com', location: 'Hyderabad' },
      { name: 'Pooja Sharma', phone: '9856789012', email: 'poojasharma@gmail.com', location: 'Hyderabad' },

      // Kolkata
      { name: 'Abhishek Das', phone: '9867890123', email: 'abhishekdas@gmail.com', location: 'Kolkata' },
      { name: 'Ritika Sen', phone: '9878901234', email: 'ritikasen@gmail.com', location: 'Kolkata' },
      { name: 'Sourav Roy', phone: '9889012345', email: 'souravroy@gmail.com', location: 'Kolkata' },
      { name: 'Madhuri Ghosh', phone: '9890123456', email: 'madhurighosh@gmail.com', location: 'Kolkata' },

      // Pune
      { name: 'Nikhil Patil', phone: '9801234567', email: 'nikhilpatil@gmail.com', location: 'Pune' },
      { name: 'Snehal Jadhav', phone: '9812345678', email: 'snehaljadhav@gmail.com', location: 'Pune' },
      { name: 'Rohit Kulkarni', phone: '9823456789', email: 'rohitkulkarni@gmail.com', location: 'Pune' },
      { name: 'Aarti Joshi', phone: '9834567890', email: 'aartijoshi@gmail.com', location: 'Pune' },

      // Ahmedabad
      { name: 'Hardik Patel', phone: '9845678901', email: 'hardikpatel@gmail.com', location: 'Ahmedabad' },
      { name: 'Kavita Shah', phone: '9856789012', email: 'kavitashah@gmail.com', location: 'Ahmedabad' },
      { name: 'Jay Mehta', phone: '9867890123', email: 'jaymehta@gmail.com', location: 'Ahmedabad' },
      { name: 'Rina Desai', phone: '9878901234', email: 'rinadesai@gmail.com', location: 'Ahmedabad' },

      // Jaipur
      { name: 'Mohit Sharma', phone: '9889012345', email: 'mohitsharma@gmail.com', location: 'Jaipur' },
      { name: 'Poonam Agarwal', phone: '9890123456', email: 'poonamagarwal@gmail.com', location: 'Jaipur' },
      { name: 'Ravi Jain', phone: '9801234567', email: 'ravijain@gmail.com', location: 'Jaipur' },
      { name: 'Neha Soni', phone: '9812345678', email: 'nehasoni@gmail.com', location: 'Jaipur' },

      // Lucknow
      { name: 'Alok Tiwari', phone: '9823456789', email: 'aloktiwari@gmail.com', location: 'Lucknow' },
      { name: 'Swati Mishra', phone: '9834567890', email: 'swatimishra@gmail.com', location: 'Lucknow' },
      { name: 'Vikas Yadav', phone: '9845678901', email: 'vikasyadav@gmail.com', location: 'Lucknow' },
      { name: 'Ruchi Verma', phone: '9856789012', email: 'ruchiverma@gmail.com', location: 'Lucknow' },
    ];
  }

  searchAgents(): void {
    this.filteredAgents = this.agents.filter(agent => agent.location === this.selectedLocation);
  }


  
onLocationChange(location: string): void {
  if (!location) {
    this.filteredAgents = [];
  }
}

resetPage(): void {
  this.selectedLocation = '';
  this.filteredAgents = [];
}

}

