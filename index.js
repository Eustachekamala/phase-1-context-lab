/* Your Code Here */

function createEmployeeRecord(arr){
    //here I create the array of the information of the employe

    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }

}

function createEmployeeRecords(employeeArray){
    return employeeArray.map(createEmployeeRecord);
}

function createTimeInEvent(employeeRecord, timeStamp){
 let [date, hour] = timeStamp.split(' ');
    employeeRecord.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    });
    return employeeRecord;
}

function createTimeOutEvent(employeeRecord, timeStamp){
 let [date, hour] = timeStamp.split(' ');
    employeeRecord.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    });
    return employeeRecord;
  };

function hoursWorkedOnDate(employeeRecord, workDate) {
    // Find the specific record for the date
    const timeIn = employeeRecord.timeInEvents.find(event => event.date === workDate);
    const timeOut = employee.timeOutEvents.find(event => event.date === workDate);
    return (timeOut.hour - timeIn.hour) / 100; 
}

function wagesEarnedOnDate(employeeRecord, workDate) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, workDate);
    const payRate = employee.payPerHour;

    return hoursWorked * payRate * 2 ;
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPayroll, employee) => {
        return totalPayroll + allWagesFor(employee);
    }, 0);
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

