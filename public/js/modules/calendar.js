document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var modal = document.getElementById('taskModal');
    var closeModal = document.getElementsByClassName('close')[0];
    var saveTask = document.getElementById('saveTask');
    var taskTitle = document.getElementById('taskTitle');
    var taskStart = document.getElementById('taskStart');
    var taskEnd = document.getElementById('taskEnd');
    var taskAllDay = document.getElementById('taskAllDay');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
            {
                title: 'Client Meeting',
                start: '2023-09-15T10:00:00',
                end: '2023-09-15T12:00:00'
            },
            {
                title: 'Project Deadline',
                start: '2023-09-22',
                allDay: true
            }
        ],
        editable: true,
        selectable: true,
        businessHours: true,
        dayMaxEvents: true,
        select: function(info) {
            modal.style.display = 'block';
            taskStart.value = info.startStr;
            taskEnd.value = info.endStr;
        },
        eventClick: function(info) {
            alert('Event: ' + info.event.title);
        }
    });

    calendar.render();

    closeModal.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    saveTask.onclick = function() {
        if (taskTitle.value) {
            var newEvent = {
                title: taskTitle.value,
                start: taskStart.value,
                end: taskEnd.value,
                allDay: taskAllDay.checked
            };
            calendar.addEvent(newEvent);
            modal.style.display = 'none';
            
            taskTitle.value = '';
            taskAllDay.checked = false;
        } else {
            alert('Please enter a task title');
        }
    }
});