// --- CONFIGURATION ---
// Update this object with the menu for each day of the week.
const lunchMenu = {
    // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    1: "Chicken Sandwiches",
    2: "Lemon Pepper Chicken",
    3: "Baked Beef Ziti",
    4: "Coconut Chicken Curry",
    5: "Pepperoni Pizza",
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
