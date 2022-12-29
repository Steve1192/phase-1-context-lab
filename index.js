/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */




function createEmployeeRecord(employeeInfo) {

let employee = {
    firstName : employeeInfo[0],
    familyName: employeeInfo[1],
    title: employeeInfo[2],
    payPerHour: employeeInfo[3],
    timeInEvents: [],
    timeOutEvents: []
}
return employee

}

function createEmployeeRecords(employeeInfo) {
let employeeRecords = []
//so for each employee entered in the array we
employeeInfo.forEach(employee => {
    //apply this callback function where we push the next
    employeeRecords.push(createEmployeeRecord(employee))
    //employees info into employeeRecords which is an array of 
    //objects, each of which is an employee record
});

return employeeRecords;

}


function createTimeInEvent(dateStamp) {
let parts = dateStamp.split(' ');

let date = parts[0]
let hour = Number(parts[1])


let timeInEvent = {
    type: 'TimeIn',
    hour: hour,
    date: date
};

this.timeInEvents.push(timeInEvent);

return this;

}


function createTimeOutEvent(dateStamp) {
    let parts = dateStamp.split(' ');
    
    let date = parts[0]
    let hour = Number(parts[1])
    
    
    let timeOutEvent = {
        type: 'TimeOut',
        hour: hour,
        date: date
    };
    
    this.timeOutEvents.push(timeOutEvent);
    
    return this;
    
    }

    function hoursWorkedOnDate(dateStamp) { 

let hoursWorked = 0
        let timeInEvent = this.timeInEvents.find(event => event.date === dateStamp);
        let timeOutEvent = this.timeOutEvents.find(event => event.date ==dateStamp)

        hoursWorked = (timeOutEvent.hour - timeInEvent.hour) /100

        return hoursWorked
    }


    function wagesEarnedOnDate(dateStamp) {
let payOwed = 0
    let payRate = this.payPerHour
    let hoursWorked = hoursWorkedOnDate.call(this, dateStamp); //so I can use 'this' in here after .call to pass the object we're working on 
                                                            //as an argument even though only 1 argument was passed in the original function
payOwed = payRate * hoursWorked

        return payOwed

    }


    function findEmployeeByFirstName(srcArray, firstNameString)
    {
            //srcArray is an array of employee records
            //firstNameString is the employee's first name

            for  (let i = 0; i < srcArray.length; i++)
            {
                if (srcArray[i].firstName === firstNameString)
                {
                    return srcArray[i]
                }
            }
            return null}

    

function calculatePayroll(employeeRecords)
{
let payrollSum = 0;

employeeRecords.forEach(function(employee){
    
    let payOwed = allWagesFor.call(employee);
    payrollSum += payOwed;
    
  });


return payrollSum
}


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}