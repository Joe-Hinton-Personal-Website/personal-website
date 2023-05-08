Use a text editor to complete the following:

You were hired by a global hotel chain to redesign the functionality of the button panel on their elevators. The goal is to replace the outdated panel in over 1,200 different locations. Before you begin coding, you should make a list of all the ways these panels should be tested to make sure they are working correctly and respond to unexpected input in a way that makes sense. Remember to consider happy and unhappy paths! 

To complete this guided practice, write as many Unit Tests as possible. If time allows, write at least one integration, functional, and acceptance test. Be sure to label each test with its associated type (Unit, Integration, Functional, Acceptance).  

## Unit Tests

=> Check that button for every floor lights up when pressed
=> Check that button for every floor switches off when it reaches destination floor
=> Check that the button for emergency stops the elevator immediately 
=> Check that button for emergency activates alarm

## Integration Tests

=> Check that the elevator communicates with the controller and allows the elevator to move in the expected direction. 
=> Testing that when button is pressed of an open elevator and a person is standing in the doorway, it doesn't close and makes a sound


## Functional Tests

=> When the button gets pressed, floor gets selected and the user is moved to that floor in a reasonable time. 
=> Check that elevator panel handles multiple requests from different users in a fair and efficient manner.


## Acceptance Tests

=> Check that elevator button panel is intuitive to use by users. 
=> Checking that elevator button panel is intuitive to use by users of different ages and abilities and languages spoken.
=> Elevator should be aesthetically pleasing.