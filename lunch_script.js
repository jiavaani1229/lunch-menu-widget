// --- CONFIGURATION ---
// Update this object with the menu for each day of the week.
const lunchMenu = {
    // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    1: "Lemon Pepper Chicken and Roasted Potatoes",
    2: "Taco Salad",
    3: "Chicken Curry and Steamed Rice",
    4: "Baked Beef Ziti with Dinner Roll",
    5: "Jerk Spiced Salmon in Pineapple Salsa with Rice",
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
