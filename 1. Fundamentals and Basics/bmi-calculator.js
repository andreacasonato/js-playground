let heightInches = 74;
let weightPounds = 180;

let heightCentimeters = heightInches * 2.54;
let weightKilograms = weightPounds / 2.2046;

console.log(`${heightInches} inches equals to ${heightCentimeters} centimeters.`);
// 74 inches equals to 187.96 centimeters.
console.log(`${weightPounds} pounds equals to ${weightKilograms} kilograms.`);
// 180 pounds equals to 81.64746439263358 kilograms.

// Convert height from centimeters to meters for BMI calculation
let heightMeters = heightCentimeters / 100;

// Calculate BMI: weight (kg) divided by height squared (m²)
let bmi = weightKilograms / (heightMeters ** 2);

// Output BMI result
console.log(`BMI: ${bmi.toFixed(2)}`); // BMI: 23.11