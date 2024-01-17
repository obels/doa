const employeeData = [
  {
    id: "1",
    name: "Andrew",
    phone: "702-111-1112",
    title: "AIRPORT OPS DISPATCHER",
    division: "AIRSIDE OPERATIONS",
    active: false,
  },
  {
    id: "2",
    name: "Jimmy",
    phone: "702-111-1113",
    title: "MAINTENANCE WORKER",
    division: "AIRSIDE OPERATIONS",
    active: false,
  },

  {
    id: "3",
    name: "Stacy",
    phone: "702-111-1114",
    title: "PASSENGER SERVICES",
    division: "TERMINAL OPERATIONS",
    active: false,
  },
  {
    id: "4",
    name: "Enrique",
    phone: "702-111-1115",
    title: "PS SUVERVISOR",
    division: "TERMINAL OPERATIONS",
    active: false,
  },
  {
    id: "5",
    name: "Obel",
    phone: "702-111-1116",
    title: "SYSTEM TECHNICIAN",
    division: "INFORMATION SYSTEMS",
    active: false,
  },
  {
    id: "6",
    name: "Peter",
    phone: "702-111-1117",
    title: "SYSTEM TECHNICIAN",
    division: "INFORMATION SYSTEMS",
    active: false,
  },
  {
    id: "7",
    name: "Mery",
    phone: "702-111-1118",
    title: "FINANCIAL ANALYST",
    division: "FINANCE",
    active: false,
  },
  {
    id: "8",
    name: "Sandy",
    phone: "702-111-1119",
    title: "STOREKEEPER",
    division: "FINANCE",
    active: false,
  },
  {
    id: "9",
    name: "Jesus",
    phone: "702-111-1120",
    title: "CANINE HANDLER",
    division: "SECURITY",
    active: false,
  },
  {
    id: "10",
    name: "Rita",
    phone: "702-111-1121",
    title: "CLEARANCE SPECIALIST",
    division: "SECURITY",
    active: false,
  },
];

const employeeDivision = [
  "AIRSIDE OPERATIONS",
  "TERMINAL OPERATIONS",
  "INFORMATION SYSTEMS",
  "FINANCE",
  "SECURITY",
];

export function getEmployeeData() {
  return employeeData;
}

export function getEmployeeDivision() {
  return employeeDivision;
}
