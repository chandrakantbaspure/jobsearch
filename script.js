// Add import for form initialization
import { initializeJobForm } from './js/form.js';

// Update the setupEventListeners function to initialize the job form
function setupEventListeners() {
    // ... existing event listener code ...
    
    // Initialize job post form fields
    initializeJobForm();
    
    // Show job post modal event
    document.addEventListener('showJobPostModal', () => {
        initializeJobForm();
    });
}