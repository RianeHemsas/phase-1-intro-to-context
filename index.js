// Your code here
function  createEmployeeRecord(array){
    return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
    }
}
function  createEmployeeRecords(array){
    
return array.map(element=>createEmployeeRecord(element));
    
}

const createTimeInEvent = (employeeObject, Date) => {
    const dateAndHour = Date.split(' ');
    const date = dateAndHour[0];
    const hour = parseInt(dateAndHour[1], 10);
  


    if (!isNaN(hour)) {
    
      const timeInEvent = {
        type: 'TimeIn',
        hour: hour,
        date: date,
      };
  
      
      employeeObject.timeInEvents.push(timeInEvent);
    }
  
    return employeeObject;
  }
  


  
  function createTimeOutEvent(employeeObject, Date) {
   
    const dateAndHour = Date.split(' ');
    const date = dateAndHour[0];
    const hour = parseInt(dateAndHour[1], 10);
  
  
    if (!isNaN(hour)) {
   
      const timeOutEvent = {
        type: 'TimeOut',
        hour: hour,
        date: date,
      };
  
      employeeObject.timeOutEvents.push(timeOutEvent);
    }
  
    return employeeObject;
  }
  
  

  function hoursWorkedOnDate(employeeObject, date) {

    const timeInEvent = employeeObject.timeInEvents.find(event => event.date === date);
    const timeOutEvent = employeeObject.timeOutEvents.find(event => event.date === date);
  
    if (timeInEvent && timeOutEvent) {
      const hoursWorked = timeOutEvent.hour - timeInEvent.hour;
      return hoursWorked/ 100;
    }
  
    return false;
    
  }


  let wagesEarnedOnDate = function(employee, dateE){
    let hoursWorked = hoursWorkedOnDate(employee, dateE)
    let total =hoursWorked * employee.payPerHour;
        
    return total;
}


  function allWagesFor(employee) {
    let totalWages = 0;
  
   
    for (let i = 0; i < employee.timeInEvents.length; i++) {
      const timeInEvent = employee.timeInEvents[i];
      const date = timeInEvent.date;
  
      
      const wagesForDate = wagesEarnedOnDate(employee, date);
      totalWages += wagesForDate;
    }
  
    return totalWages;
  }


  function calculatePayroll(employees) {
    let totalPayroll = 0;
  
    for (let i = 0; i < employees.length; i++) {
      const employee = employees[i];
      const totalWages = allWagesFor(employee);
      totalPayroll += totalWages;
    }
  
    return totalPayroll;
  }

//   const csvDataEmployees = [
//     ["Thor", "Odinsson", "Electrical Engineer", 45],
//     ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
//     ["Natalia", "Romanov", "CEO", 150],
//     ["Darcey", "Lewis", "Intern", 15],
//     ["Jarvis", "Stark", "CIO", 125],
//     ["Anthony", "Stark", "Angel Investor", 300]
//   ]

//   const csvTimesIn = [
//     ["Thor", ["2018-01-01 0800", "2018-01-02 0800", "2018-01-03 0800"]],
//     ["Loki", ["2018-01-01 0700", "2018-01-02 0700", "2018-01-03 0600"]],
//     ["Natalia", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1300"]],
//     ["Darcey", ["2018-01-01 0700", "2018-01-02 0800", "2018-01-03 0800"]],
//     ["Jarvis", ["2018-01-01 0500", "2018-01-02 0500", "2018-01-03 0500"]],
//     ["Anthony", ["2018-01-01 1400", "2018-01-02 1400", "2018-01-03 1400"]]
//   ]

//   const csvTimesOut = [
//     ["Thor", ["2018-01-01 1600", "2018-01-02 1800", "2018-01-03 1800"]],
//     ["Loki", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1800"]],
//     ["Natalia", ["2018-01-01 2300", "2018-01-02 2300", "2018-01-03 2300"]],
//     ["Darcey", ["2018-01-01 1300", "2018-01-02 1300", "2018-01-03 1300"]],
//     ["Jarvis", ["2018-01-01 1800", "2018-01-02 1800", "2018-01-03 1800"]],
//     ["Anthony", ["2018-01-01 1600", "2018-01-02 1600", "2018-01-03 1600"]]
//   ]

//   let employeeRecords = createEmployeeRecords(csvDataEmployees);
//   employeeRecords.forEach( (rec) =>{
//     let timesInRecordRow = csvTimesIn.find(function (row) {
//       return rec.firstName === row[0]
//     }) 
//     return timesInRecordRow;
// })

//   console.log(employeeRecords)
