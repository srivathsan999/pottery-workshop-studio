// Dashboard functionality

document.addEventListener('DOMContentLoaded', function() {
    // Registration Form Handler
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const workshop = document.getElementById('workshop').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const participants = document.getElementById('participants').value;
            const notes = document.getElementById('notes').value;
            
            // Validation
            if (!workshop || !date || !time || !participants) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Get workshop name and price
            const workshopSelect = document.getElementById('workshop');
            const selectedOption = workshopSelect.options[workshopSelect.selectedIndex];
            const workshopName = selectedOption.text.split(' - ')[0];
            const workshopPrice = selectedOption.text.split(' - ')[1] || '';
            
            // Format date for display
            const formattedDate = new Date(date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
            
            // Format time for display
            const timeLabels = {
                'morning': '9:00 AM - 12:00 PM',
                'afternoon': '1:00 PM - 4:00 PM',
                'evening': '5:00 PM - 8:00 PM'
            };
            const formattedTime = timeLabels[time] || time;
            
            // Create registration data
            const registrationData = {
                workshop: workshopName,
                date: formattedDate,
                time: formattedTime,
                participants: participants,
                notes: notes,
                price: workshopPrice,
                status: 'Pending'
            };
            
            // Simulate API call
            setTimeout(() => {
                showNotification(`Successfully registered for ${workshopName}!`, 'success');
                
                // Add to upcoming classes
                addUpcomingClass(registrationData);
                
                // Reset form
                registrationForm.reset();
            }, 1000);
        });
    }
    
    // View Details Buttons
    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const className = this.getAttribute('data-class');
            showClassDetails(className);
        });
    });
    
    // Edit Profile Button
    const editProfileBtn = document.getElementById('edit-profile-btn');
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', function() {
            showEditProfileModal();
        });
    }
    
    // Payment Methods Button
    const paymentMethodsBtn = document.getElementById('payment-methods-btn');
    if (paymentMethodsBtn) {
        paymentMethodsBtn.addEventListener('click', function() {
            showPaymentMethodsModal();
        });
    }
    
    // Notification Preferences Button
    const notificationPreferencesBtn = document.getElementById('notification-preferences-btn');
    if (notificationPreferencesBtn) {
        notificationPreferencesBtn.addEventListener('click', function() {
            showNotificationPreferencesModal();
        });
    }
});

// Function to show class details
function showClassDetails(className) {
    const classData = {
        "Beginner's Wheel": {
            date: "March 15, 2024",
            time: "9:00 AM - 1:00 PM",
            instructor: "Sarah Johnson",
            location: "Main Studio",
            materials: "Clay, tools, and glazes included",
            status: "Confirmed"
        },
        "Glazing & Finishing": {
            date: "March 22, 2024",
            time: "1:00 PM - 5:00 PM",
            instructor: "Michael Chen",
            location: "Main Studio",
            materials: "Glazes and brushes provided",
            status: "Pending"
        }
    };
    
    const details = classData[className] || {
        date: "TBD",
        time: "TBD",
        instructor: "TBD",
        location: "Main Studio",
        materials: "All materials included",
        status: "Pending"
    };
    
    const modal = createModal(
        `Class Details: ${className}`,
        `
            <div class="space-y-4">
                <div>
                    <p class="text-sm text-secondary mb-1">Date</p>
                    <p class="text-primary font-medium">${details.date}</p>
                </div>
                <div>
                    <p class="text-sm text-secondary mb-1">Time</p>
                    <p class="text-primary font-medium">${details.time}</p>
                </div>
                <div>
                    <p class="text-sm text-secondary mb-1">Instructor</p>
                    <p class="text-primary font-medium">${details.instructor}</p>
                </div>
                <div>
                    <p class="text-sm text-secondary mb-1">Location</p>
                    <p class="text-primary font-medium">${details.location}</p>
                </div>
                <div>
                    <p class="text-sm text-secondary mb-1">Materials</p>
                    <p class="text-primary font-medium">${details.materials}</p>
                </div>
                <div>
                    <p class="text-sm text-secondary mb-1">Status</p>
                    <p class="text-primary font-medium">${details.status}</p>
                </div>
            </div>
        `
    );
    
    document.body.appendChild(modal);
    showModal(modal);
}

// Function to show edit profile modal
function showEditProfileModal() {
    const modal = createModal(
        'Edit Profile',
        `
            <form id="edit-profile-form" class="space-y-4">
                <div>
                    <label class="block text-sm text-secondary mb-2">Full Name</label>
                    <input type="text" value="John Doe" class="w-full px-4 py-2 bg-surface border border-theme rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-accent-terracotta">
                </div>
                <div>
                    <label class="block text-sm text-secondary mb-2">Email</label>
                    <input type="email" value="john.doe@example.com" class="w-full px-4 py-2 bg-surface border border-theme rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-accent-terracotta">
                </div>
                <div>
                    <label class="block text-sm text-secondary mb-2">Phone</label>
                    <input type="tel" value="+1 (555) 123-4567" class="w-full px-4 py-2 bg-surface border border-theme rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-accent-terracotta">
                </div>
                <div>
                    <label class="block text-sm text-secondary mb-2">Address</label>
                    <textarea rows="3" class="w-full px-4 py-2 bg-surface border border-theme rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-accent-terracotta">123 Main Street, City, State 12345</textarea>
                </div>
                <div class="flex gap-3 pt-4">
                    <button type="submit" class="btn-primary flex-1">Save Changes</button>
                    <button type="button" class="btn-secondary flex-1 close-modal-btn">Cancel</button>
                </div>
            </form>
        `
    );
    
    document.body.appendChild(modal);
    showModal(modal);
    
    // Handle form submission
    const form = modal.querySelector('#edit-profile-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Profile updated successfully!', 'success');
        closeModal(modal);
    });
}

// Function to show payment methods modal
function showPaymentMethodsModal() {
    const modal = createModal(
        'Payment Methods',
        `
            <div class="space-y-4">
                <div class="p-4 bg-surface rounded-lg border border-theme">
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center">
                            <svg class="w-8 h-8 text-accent-terracotta mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                            </svg>
                            <div>
                                <p class="font-medium text-primary">•••• •••• •••• 4242</p>
                                <p class="text-sm text-secondary">Expires 12/25</p>
                            </div>
                        </div>
                        <span class="text-sm text-accent-terracotta font-medium">Default</span>
                    </div>
                </div>
                <button class="w-full btn-primary">Add New Payment Method</button>
            </div>
        `
    );
    
    document.body.appendChild(modal);
    showModal(modal);
}

// Function to show notification preferences modal
function showNotificationPreferencesModal() {
    const modal = createModal(
        'Notification Preferences',
        `
            <form id="notification-preferences-form" class="space-y-4">
                <div class="flex items-center justify-between p-4 bg-surface rounded-lg border border-theme">
                    <div>
                        <p class="font-medium text-primary">Email Notifications</p>
                        <p class="text-sm text-secondary">Receive updates via email</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked class="sr-only peer">
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent-terracotta rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-terracotta"></div>
                    </label>
                </div>
                <div class="flex items-center justify-between p-4 bg-surface rounded-lg border border-theme">
                    <div>
                        <p class="font-medium text-primary">SMS Notifications</p>
                        <p class="text-sm text-secondary">Receive updates via text message</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer">
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent-terracotta rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-terracotta"></div>
                    </label>
                </div>
                <div class="flex items-center justify-between p-4 bg-surface rounded-lg border border-theme">
                    <div>
                        <p class="font-medium text-primary">Class Reminders</p>
                        <p class="text-sm text-secondary">Get reminded before your classes</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked class="sr-only peer">
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent-terracotta rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-terracotta"></div>
                    </label>
                </div>
                <div class="flex gap-3 pt-4">
                    <button type="submit" class="btn-primary flex-1">Save Preferences</button>
                    <button type="button" class="btn-secondary flex-1 close-modal-btn">Cancel</button>
                </div>
            </form>
        `
    );
    
    document.body.appendChild(modal);
    showModal(modal);
    
    // Handle form submission
    const form = modal.querySelector('#notification-preferences-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Notification preferences saved!', 'success');
        closeModal(modal);
    });
}

// Function to add upcoming class to the list
function addUpcomingClass(classData) {
    const upcomingClassesContainer = document.querySelector('.space-y-4');
    if (!upcomingClassesContainer) return;
    
    const classCard = document.createElement('div');
    classCard.className = 'p-4 bg-surface rounded-lg border border-theme';
    classCard.innerHTML = `
        <div class="flex items-center justify-between mb-2">
            <h4 class="font-medium text-primary">${classData.workshop}</h4>
            <span class="text-sm text-accent-sage font-medium">${classData.status}</span>
        </div>
        <p class="text-sm text-secondary">${classData.date} • ${classData.time}</p>
        <button type="button" class="view-details-btn mt-2 text-sm text-accent-terracotta hover:underline" data-class="${classData.workshop}">View Details</button>
    `;
    
    // Add event listener to the new button
    const viewDetailsBtn = classCard.querySelector('.view-details-btn');
    viewDetailsBtn.addEventListener('click', function() {
        showClassDetails(classData.workshop);
    });
    
    upcomingClassesContainer.insertBefore(classCard, upcomingClassesContainer.firstChild);
}

// Function to create modal
function createModal(title, content) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-50 hidden flex items-center justify-center p-4';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modal.innerHTML = `
        <div class="bg-surface rounded-2xl shadow-theme-lg max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-2xl font-heading font-medium text-primary">${title}</h3>
                <button class="close-modal-btn p-2 hover:bg-accent-terracotta hover:text-white rounded-lg transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            ${content}
        </div>
    `;
    
    // Add close functionality
    const closeButtons = modal.querySelectorAll('.close-modal-btn');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => closeModal(modal));
    });
    
    // Close on backdrop click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
    
    return modal;
}

// Function to show modal
function showModal(modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

// Function to close modal
function closeModal(modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
    setTimeout(() => {
        if (modal.parentNode) {
            modal.parentNode.removeChild(modal);
        }
    }, 300);
}

// Function to show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed top-24 right-4 z-50 p-4 rounded-lg shadow-theme-lg transform transition-all duration-300 translate-x-full`;
    
    const bgColor = type === 'success' ? 'bg-accent-sage' : 'bg-red-500';
    notification.classList.add(bgColor);
    notification.innerHTML = `
        <div class="flex items-center text-white">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                ${type === 'success' 
                    ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>'
                    : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>'
                }
            </svg>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

