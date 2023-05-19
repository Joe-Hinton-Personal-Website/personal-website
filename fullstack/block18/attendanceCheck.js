// INCOMPLETE!!! Check GitHub

let classRoom = [
  {
      "Marnie" : [
              {"Monday" : true},
              {"Tuesday" : true},
              {"Wednesday" : true},
              {"Thursday" : true},
              {"Friday" : true}
          ]
  },
  {
      "Lena" : [
              {"Monday" : false},
              {"Tuesday" : false},
              {"Wednesday" : true},
              {"Thursday" : false},
              {"Friday" : true}
          ]
  },
  {
      "Shoshanna" : [
              {"Monday" : true},
              {"Tuesday" : true},
              {"Wednesday" : false},
              {"Thursday" : true},
              {"Friday" : false}
          ]
  },
  {
      "Jessa" : [
              {"Monday" : false},
              {"Tuesday" : false},
              {"Wednesday" : false},
              {"Thursday" : false},
              {"Friday" : true}
          ]
  }
];

// YOUR CODE BELOW
function attendanceCheck (dayString) {
let presentStudents = [];
for (i = 0; i < classRoom.length; i++) {
  const studentObject = classRoom[i];
  const studentName = Object.keys(studentObject)[0];
  const studentAttendanceArray = studentObject[studentName];
  for (j = 0; j < studentAttendanceArray.length; j++) {
    const dayObject = studentAttendanceArray[j];
    if (dayObject[dayString] === true) {
      presentStudent.push(studentName);
    } else {
      continue;
    }
  }
}
return presentStudents;
}

describe('attendanceCheck', () => {

it('is a function', () => {
  expect(typeof attendanceCheck).toEqual('function');
});

it('returns an array', () => {
  let returnedValue = attendanceCheck('Monday');
  expect(Array.isArray(returnedValue)).toEqual(true);
});

it('returns the correct values for Monday', () => {
  let returnedValue = attendanceCheck('Monday');
  expect(returnedValue).toEqual(['Marnie', 'Shoshanna']);
});

it('returns the correct values for Tuesday', () => {
  let returnedValue = attendanceCheck('Tuesday');
  expect(returnedValue).toEqual(['Marnie', 'Shoshanna']);
});

it('returns the correct values for Wednesday', () => {
  let returnedValue = attendanceCheck('Wednesday');
  expect(returnedValue).toEqual(['Marnie', 'Lena']);
});

it('returns the correct values for Thursday', () => {
  let returnedValue = attendanceCheck('Thursday');
  expect(returnedValue).toEqual(['Marnie', 'Shoshanna']);
});

it('returns the correct values for Friday', () => {
  let returnedValue = attendanceCheck('Friday');
  expect(returnedValue).toEqual(['Marnie', 'Lena', 'Jessa']);
});

});
