// --- CONFIGURATION ---
// Paste your school's unique Nutrislice URL here.
// Example: https://yourschooldistrict.nutrislice.com
const NUTRISLICE_URL = 'https://paceacademy.flikisdining.com';

// --- CORE LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`;
    
    const lunchItemElement = document.getElementById('lunch-item');
    lunchItemElement.textContent = 'Loading lunch menu...';

    // The API URL for today's menu
    const apiURL = `${NUTRISLICE_URL}/menu/api/weeks/school/today?format=json`;

    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data && data.menu_sections && data.menu_sections.length > 0) {
                const todayMenu = data.menu_sections.find(section => section.date === formattedDate);

                if (todayMenu && todayMenu.menu_items && todayMenu.menu_items.length > 0) {
                    // This finds the main course and displays it.
                    const mainCourse = todayMenu.menu_items[0];
                    lunchItemElement.textContent = mainCourse.food_item_name;
                } else {
                    lunchItemElement.textContent = "No menu available for today.";
                }
            } else {
                lunchItemElement.textContent = "Could not find menu data.";
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            lunchItemElement.textContent = "Failed to load lunch menu. Please try again later.";
        });
});