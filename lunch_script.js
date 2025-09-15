// --- CONFIGURATION ---
// Update this object with the menu for each day of the week.
const lunchMenu = {
    // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    1: "Burgers and Fries",
    2: "Pork Tacos",
    3: "Steakhouse Chicken with Potatoes",
    4: "Penne Pasta and Meeat Sauce",
    5: "Buffalo Wings",
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
