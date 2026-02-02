gf# Round 1
## General Questions
sooooo much abt my projects -> i gotta actually lock in for these wtf

literally asked to explain parts of the project, draw out the schematic (as best as I could remember), and explain how things were implemented/how in plan to implement

Ex.

Within this project, what was your greatest challenge/technical aspect you had the most difficulty with it? How did you solve it? 

Ans. Keyboard project, debouncing for mechanical switches and rotary encoder. Solved it by making sure keyswitch is pressed for >1 send to computer, and using a lookup table for state tracking for encoder (im not rly tryna type it all out again) 

didn't really ask much behavioral questions, mostly just technical, though I assume behavioral will come in the 2nd round/interview


## Coding: "moving median filter"

Given an array, write a function that replaces each element with the median subarray including its neighbor elements. Assume first and last don't change, and we are returning a pointer to the start of a new array (ie. original array is unmodified, we are copying it over). 



note\* for duplicate elements within a subarray, the median is the element that is duplicated



for \[a,b,c,d,e] -> replace "b" with median of \[a,b,c], replace "c" with median of \[b,c,d], replace "d" with median of \[c,d,e]



Ex. 

input \[0,1,2,3,4]
output \[0,1,2,3,4]

input \[5,4,5,5,5,5]
output \[5,5,5,5,5,5]

input \[3,2,5,6,4]
output \[3,3,5,5,4]

## Technical System Design (Focus on thought process for this):

### Pretend you are engineer working on the following project:

A thermocouple sensor is giving data to ADC -> MCU -> Computer (sent over USART to serial monitor). You are tasked with creating a GUI (general user interface) for the user to interact with, showing a graph of the data being sent in real time. How would you design this? Make the assumption that the hardware for this is already implemented:

### Answer: 

I lowk got cooked here ngl cus how the fuck do i do this? but i think they really just wanted to see the thought process and how i can break the problem down, so this is wahat i said: 

* asked more about requirements/stakeholder needs ( i needed time to think )
* talked about testing input by writing python script to populate excel (forgot the library name) but just to ensure reading serial monitor works
* broke down into frontend and backend
* backend: likely python library --> somebody else has already likely solved this problem of graphing data streams in real time lol. host python to cloud services, or to a database
* frontend: build webapp with next.js? (*prob too technical, this question is meant for more higher level*), then connect with backend/database 

*prob need to talk abt filtering stuff in terms of data processing, not just UI/UX*

# Round 2

### CV/Hellohacks questions

- Asked me to describe how computer vision works
    - Answer: detecting gradient/change/contrast in pixel colour w
- Asked about literally every aspect of it, ie. frameworks used, project structure, flow of data from input to output, normalization equations, etc.
- Asked how I would be able to modify our program to know how far the user is away from the webcam
    - same as normalization technique, take 2 known points (shoulder distance) and then observe how it changes → smaller = further, bigger = close (this is all relative distance, not absolute distance)
- what user experience did you think of/prioritize?
- how would you improve your project to work better under low light/ poor contrast conditions?
    - connected to the next few questions

### Course related questions

### 157/light quesitons (i assume cus id be working with Infrared sensors at this job)

- what is visible light?
- what is on both sides of the visible light spectrum?
- how/why is UV light dangerous to humans?
- based on your knowledge of light, how do cameras (specifically infrared cameras) work?

### emag/pendulum

- imagine you had a pendulum which holds a flat copper plate on the bottom. if you drew this on a sheet, the plate would lie on the same plane as the sheet. describe all the forces acting on this system, and all the energies involved in the motion of this object (assuming ideal conditions, no losses).
- now, at the very bottom of the pendulum (when the plate is at max speed), a magnetic field going into the page is introduced. (only covers the bottom-ish bit, at peak hegith there is no magnetic field). What is the effect of this magnetic field on the motion of the plate, why does this occur?
    - now describe this scenario in terms of energy (ie. where does the energy go?)
    - also answer how the current would flow in the plate

### coding question

- create a function that populates an NxN square matrix with a checkerboard pattern. this function will receive the size n, and a 2d array to populate (if done in C)
    - prototype: void matrix(int** array, int n);
    - {0,1,0,1,0}
    {1,0,1,0,1}
    {0,1,0,1,0}
    {1,0,1,0,1}
    {0,1,0,1,0}
- now rewrite this function using only one line of code (apart from loops, etc.). there should be no conditionals.
- now write unit tests in main for this function.

### stupid riddles

**fridge:**

- imagine you have a perfectly enclosed room, and inside there is a fridge. if you open the door to the fridge and plug it into an outlet to turn it on, what happens to the temperature in the room? describe why in terms of thermodynamics or energy.
- now imagine the fridge was ideal (100% efficient, does not need to be plugged into an outlet). what happens now? describe why in terms of thermo or energy.

**boat:**

- imagine you have a boat in a bucket. you measure the intial height of water in the bucket to be L0. now you place a large iron ball ni the boat, and the boat still floats. Would the height of the water change to be L1? If so, where would L1 be relative to L0? And if the height of water changes, why would it change and how does that affect the boat?
- Now if you only know the weight of the ball, how would you be able to determine L1?
- Now, you take the ball out of the boat, and place it at the bottom of the bucket, directly under the boat. does this change the level of the water compared to L0? does this change the boat’s position in the water?