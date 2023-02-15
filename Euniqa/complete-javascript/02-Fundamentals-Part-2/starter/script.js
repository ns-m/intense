const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's BMI ${BMIJohn}`);
} else {
  console.log(`Mark's BMI ${BMIJohn} is higher than John's BMI ${BMIMark}`);
}
