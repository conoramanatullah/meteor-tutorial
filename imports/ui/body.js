import { Template } from 'meteor/templating';

// Our DB Collection
import { Tasks } from '../api/tasks.js';

// Our tasks
import './task.js';
import './body.html';

Template.body.helpers({
    tasks() {
        return Tasks.find({}, {sort: {createdAt: -1}});
    },
});

Template.body.events({
    'submit .new-task'(event) {
        console.log(event);
        event.preventDefault();

        // Get value from form
        const target = event.target;
        const text = target.text.value;

        // Insert Task into collection
        Tasks.insert({
            text,
            createdAt: new Date(),
        });

        // Clear form
        target.text.value = '';
    },
});