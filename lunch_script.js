// --- CONFIGURATION ---
// Update this object with the menu for each day of the week.
const lunchMenu = {
    // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    1: "Burgers and Fries",
    2: "Pesto Chicken Thigh",
    3: "Pasta",
    4: "Chicken Drumsticks",
    5: "Pulled Pork and Mac and Cheese",
    6: "No School Lunch Today",
    0: "No School Lunch Today"
};

// --- CORE LOGIC ---
// This part does not need to be changed.
document.addEventListener('DOMContentLoaded', () => {
    const now = new Date();
    const today = now.getDay(); // Gets the day of the week (0-6)
    
    const lunchToday = lunchMenu[today];
    const lunchItemElement = document.getElementById('lunch-item');

    lunchItemElement.textContent = lunchToday;
});
