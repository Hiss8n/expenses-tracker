
##Table


The <table> tag defines the tbale element inside the web browser
The `thead` deffine the element,e.g the row that will be the table's head mostly in bold
The table body will contain the table entries that corresponds to the definitons made in the first elements written in the header of the table
The `tr` tag deifnes all the table row that is both available in the header or the body of any table
the `th` and the `td` define what goes into the row in the table body or the table header
For the row in the thead part, the `tr` will contain the `th` element as the child and the `tbody`,`tr` will contail the `td` which  corresponds to the `tr` at the header.


SPENDWISE PROJECT

The spendwise project is a digital budget tracing platefom. The platform helps track user's income and expenditure.
The user can enter in their montly income and expenditure categories.
Every category respresent the specific field that the mobey has been used for. The user is able to track records of his/her total income alongside the amount spend it total and per each items in a tabular fomate. The user has also access to a summary sections where all activivites regarding the budget is summarised at a glance.
At the top of the dashboard page, all the total amount,icnuding the spent money and reminder is shown in a short stat.
The side bar categories the budgeting and provides more insight per each category of the spenditures within a certain period of time.


JavaScrript concept-
The user is able to enter their amount
The scripts calculates the total amount and return the balance and stored this in variable that is then render in the browser


Variable -are memory spaces that stores data. The data can be entered by the user or calculated from existign values in other variable .

Input- are are ment to collect data that a user enter. When a user enter a value in the input, javascript take the input value and store in it a variable for future computations.

Calcualtions in javaScrip are perfomed using the following the mathematics operators are follows:
Multiplications (*)
Divisions (/)
Additions(+)
Subtractions (-)
Modulo (%)

All arithmetical calculations expects the values to either be an interger or a floating point number. Any values that are entered in the inputs must be converted if not into the mentioned data types.

Functions- are used to run a set of piece of code that needs to run several times. In calculations, functions are used to take in valuex, then perform the required operations and return the value that is expected back as a variable. Functions prevent the repetations of long peice of code again and again.These keepd code base clean and tidy by reducing repetitions.

Improvement on spendwise

There is data validations before the calculations are don
Using if else statments amek sure the user enters the corect data to avoid negative values where they are not expected.

Two arrays
oe to store data for monthly spenditure and the other to store weekly spenditure
The DOM elements are updated using the javascript fucniton
Using the innerHTML content and innerText content to change the elements of the html in the html file
user interactions are hander thorugh the eventLisner  such as click,houver,drag,drop and many more



