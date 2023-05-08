<!--  
Read the prompt.
Identify the expectations.
Write specifications for all the tests that would be useful for that prompt.
Try to take any "edge cases," or unexpected circumstances, into account, and write test specs for them.
Try not to write extraneous tests!
-->

Write Unit Tests for:
A function called "multiplication" that returns the product of the two input numbers.

A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.
Example: concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])
...should result in [-1, 1, 3, 9, 15]
Think about the following; you may need to make assumptions or decisions about the prompt and how the code should behave:
What should happen with unexpected inputs?
What kinds of unexpected inputs should we worry about?
What should happen when there are multiples of the same odd number in the arrays? (Hint: We gave you the answer to this one in the example above.)

## Unit Tests

1: A function called "multiplication" that returns the product of the two input numbers.

A1: Expect[multiplication (2,3) to be a number]
A2: Expect[multiplication (2,3) to be equal to 6]
A3: Expect[multiplication ("a",3) to return an error]
A4: Expect [multiplication () to return an error]

2: A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.

A1: concatOdds([3, 2, 1], [4, 5, 6]) returns [1, 3, 5]
A2: if [" ", true/false] returns an error
A3: if [1, 1, 1, 3, 5] returns one(singular) 1

## Functional Tests

1: A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.

A1: When cart is empty [prompt user to begin by putting items in cart]
    When cart is empty [encourage user to put items in cart]
    

A2: When user scans an item [show item information on screen]
  When user scans an item [show all items scanned on screen]
  When user scans an item [make an "item scanned" affirmation sound]
  When user scans an item [an affirmation message is displayed]

  A3: When cart is empty [encourage user to put items in cart]
      -How are users encouraged to put items in cart?
      -What information is used to encourage users to put items in cart? 

    When cart is empty [prompt user to begin by putting items in cart]
      -At which stages is this prompt carried out and ignored?

    When user scans an item [an affirmation message is displayed]
      -What is the affirmation message?
      -What languages are the affirmations in?
      -Are the messages visible to color blind people?


