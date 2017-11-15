import {Meteor} from 'meteor/meteor'
import {Tracker} from 'meteor/tracker'
import React from 'react'
import ReactDom from 'react-dom'

import {onAuthChange, routes} from '../imports/routes/routes'
import '../imports/startup/simple-schema-configuration.js'

Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    onAuthChange(isAuthenticated);
})

Meteor.startup(() => {
ReactDom.render(routes, document.getElementById('app'));
})
