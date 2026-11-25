document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const habitForm = document.getElementById('habit-form');
    const habitsContainer = document.getElementById('habits-container');
    const addHabitBtn = document.getElementById('add-habit-btn');
    const modal = document.getElementById('add-habit-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const progressBar = document.getElementById('daily-progress-bar');
    const progressPercent = document.getElementById('progress-percent');

    const iconOptions = document.querySelectorAll('.icon-option');
    const colorOptions = document.querySelectorAll('.color-option');

    // State
    let habits = JSON.parse(localStorage.getItem('habits')) || [];
    let selectedIcon = 'ri-book-read-line';
    let selectedColor = '#a78bfa';

    // Init
    renderHabits();
    updateDate();
    updateProgress();

    // Event Listeners
    addHabitBtn.addEventListener('click', () => {
        modal.classList.add('active');
    });

    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Icon Selection
    iconOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            iconOptions.forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            selectedIcon = opt.dataset.icon;
        });
    });

    // Color Selection
    colorOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            colorOptions.forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            selectedColor = opt.dataset.color;
        });
    });

    // Add Habit Form Submit
    habitForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('habit-name').value;

        if (!name) return;

        const newHabit = {
            id: Date.now(),
            name,
            icon: selectedIcon,
            color: selectedColor,
            streak: 0,
            completedDates: [] // Array of date strings 'YYYY-MM-DD'
        };

        habits.push(newHabit);
        saveHabits();
        renderHabits();
        updateProgress();

        // Reset and close
        habitForm.reset();
        modal.classList.remove('active');
    });

    // Functions
    function saveHabits() {
        localStorage.setItem('habits', JSON.stringify(habits));
    }

    function getTodayString() {
        const d = new Date();
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    }

    function renderHabits() {
        habitsContainer.innerHTML = '';

        if (habits.length === 0) {
            habitsContainer.innerHTML = `
                <div class="empty-state">
                    <i class="ri-leaf-line"></i>
                    <p>No habits yet. Start by adding one!</p>
                </div>
            `;
            return;
        }

        const today = getTodayString();

        habits.forEach(habit => {
            const isCompleted = habit.completedDates.includes(today);

            const habitEl = document.createElement('div');
            habitEl.className = `habit-item ${isCompleted ? 'completed' : ''}`;
            habitEl.dataset.id = habit.id;

            habitEl.innerHTML = `
                <div class="habit-left">
                    <div class="habit-icon" style="background: ${habit.color}20; color: ${habit.color}">
                        <i class="${habit.icon}"></i>
                    </div>
                    <div class="habit-info">
                        <h4>${habit.name}</h4>
                        <div class="habit-streak">
                            <i class="ri-fire-fill"></i> ${habit.streak} day streak
                        </div>
                    </div>
                </div>
                <button class="habit-check-btn" aria-label="Toggle habit">
                    <i class="ri-check-line"></i>
                </button>
            `;

            habitsContainer.appendChild(habitEl);
        });
    }

    // Event Delegation for Habits
    habitsContainer.addEventListener('click', (e) => {
        const checkBtn = e.target.closest('.habit-check-btn');
        if (checkBtn) {
            const habitItem = checkBtn.closest('.habit-item');
            const id = Number(habitItem.dataset.id);
            toggleHabit(id);
        }
    });

    habitsContainer.addEventListener('contextmenu', (e) => {
        const habitItem = e.target.closest('.habit-item');
        if (habitItem) {
            e.preventDefault();
            const id = Number(habitItem.dataset.id);
            if (confirm('Delete this habit?')) {
                deleteHabit(id);
            }
        }
    });

    function toggleHabit(id) {
        const habit = habits.find(h => h.id === id);
        if (!habit) return;

        const today = getTodayString();
        const index = habit.completedDates.indexOf(today);

        if (index > -1) {
            // Uncheck
            habit.completedDates.splice(index, 1);
            habit.streak = Math.max(0, habit.streak - 1);
            // Note: simple streak logic doesn't account for broken streaks in past. 
            // For a production app, we'd calculate streak based on history.
        } else {
            // Check
            habit.completedDates.push(today);
            habit.streak += 1;
        }

        saveHabits();
        renderHabits();
        updateProgress();
    };

    function deleteHabit(id) {
        habits = habits.filter(h => h.id !== id);
        saveHabits();
        renderHabits();
        updateProgress();
    };

    function updateProgress() {
        const today = getTodayString();
        const total = habits.length;

        if (total === 0) {
            progressBar.style.width = '0%';
            progressPercent.innerText = '0%';
            return;
        }

        const completedCount = habits.filter(h => h.completedDates.includes(today)).length;
        const percent = Math.round((completedCount / total) * 100);

        progressBar.style.width = `${percent}%`;
        progressPercent.innerText = `${percent}%`;
    }

    function updateDate() {
        const dateEl = document.getElementById('current-date');
        const options = { weekday: 'long', day: 'numeric', month: 'short' };
        dateEl.innerText = new Date().toLocaleDateString('en-US', options);
    }
});
