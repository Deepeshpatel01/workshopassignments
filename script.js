let taskId = 0;
        const tasks = {
            todo: [],
            progress: [],
            done: []
        };

        // Form submission
        document.getElementById('taskForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const input = document.getElementById('taskInput');
            const taskText = input.value.trim();
            
            if (taskText) {
                addTask(taskText);
                input.value = '';
            }
        });

        function addTask(text) {
            const task = {
                id: ++taskId,
                text: text,
                status: 'todo'
            };
            
            tasks.todo.push(task);
            renderTasks();
        }

        function moveTask(id, newStatus) {
            // Find task in current status
            let task = null;
            let currentStatus = null;
            
            for (const status in tasks) {
                const index = tasks[status].findIndex(t => t.id === id);
                if (index !== -1) {
                    task = tasks[status].splice(index, 1)[0];
                    currentStatus = status;
                    break;
                }
            }
            
            if (task) {
                task.status = newStatus;
                tasks[newStatus].push(task);
                renderTasks();
            }
        }

        function deleteTask(id) {
            for (const status in tasks) {
                const index = tasks[status].findIndex(t => t.id === id);
                if (index !== -1) {
                    tasks[status].splice(index, 1);
                    break;
                }
            }
            renderTasks();
        }

        function getNextStatus(currentStatus) {
            const statusFlow = {
                'todo': 'progress',
                'progress': 'done',
                'done': 'todo'
            };
            return statusFlow[currentStatus];
        }

        function getStatusLabel(status) {
            const labels = {
                'todo': 'Start',
                'progress': 'Complete',
                'done': 'Reset'
            };
            return labels[status];
        }

        function renderTasks() {
            for (const status in tasks) {
                const list = document.getElementById(status + 'List');
                
                if (tasks[status].length === 0) {
                    const emptyMessages = {
                        'todo': 'No tasks yet. Add one above!',
                        'progress': 'No tasks in progress',
                        'done': 'No completed tasks'
                    };
                    list.innerHTML = `<div class="empty">${emptyMessages[status]}</div>`;
                } else {
                    list.innerHTML = tasks[status].map(task => `
                        <div class="task">
                            <p>${task.text}</p>
                            <div class="task-actions">
                                <button class="btn move-btn" onclick="moveTask(${task.id}, '${getNextStatus(task.status)}')">
                                    ${getStatusLabel(task.status)}
                                </button>
                                <button class="btn delete-btn" onclick="deleteTask(${task.id})">
                                    Delete
                                </button>
                            </div>
                        </div>
                    `).join('');
                }
            }
        }

        // Initialize with sample tasks
        addTask('Review project requirements');
        addTask('Design user interface');
        moveTask(2, 'progress');