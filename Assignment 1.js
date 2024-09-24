// Declare variables and constants for each persona
const student = {
  firstName: "Sharmaine Anne",
  middleName: "Pepito",
  lastName: "Moreno",
  birthdate: "April 05, 2005",
  birthplace: "Paratong, St.Lucia, ILocos Sur, Philippines, 2721",
  address: "Paratong, Sta.Lucia, ILocos Sur, Philippines, 2712",
  course: "Bachelor Of Science In Computer Science",
  year: "2nd Year",
  dreamJob: "Web developer"
};

const classmate1 = {
  firstName: "Felix",
  middleName: "Castro",
  lastName: "Hadloc",
  birthdate: "November 05, 2002",
  birthplace: "Conconig East, Sta.Lucia, ILocos Sur, Philippines, 2712",
  address: "Conconig East, Sta.Lucia, ILocos Sur, Philippines, 2712",
  course: "Bachelor Of Physical Education",
  year: "4th Year",
  dreamJob: "Army"
};

const classmate2 = {
  firstName: "Rina",
  middleName: "Taala",
  lastName: "Sanchez",
  birthdate: "September  18, 2004",
  birthplace: "Southern Ilocos District Hospital, Tagudin, ILocos Sur, Philippines, 2714",
  address: "Barangay Paras, Candon City, Philippines, 2710",
  course: "Bachelor Of Elementary Education",
  year: "2nd Year",
  dreamJob: "Teacher"
};

// Function to print persona information using string concatenation and formatting
function printPersonaInfo(persona) {
  const sentence = `My name is ${persona.firstName} ${persona.middleName} ${persona.lastName}, born on ${persona.birthdate} in ${persona.birthplace}. I live at ${persona.address} and I'm a ${persona.year} student taking up ${persona.course}. My dream job after graduation is to become a ${persona.dreamJob}.`;
  console.log(sentence);
}

// Print persona information for each student
printPersonaInfo(student);
printPersonaInfo(classmate1);
printPersonaInfo(classmate2);
