import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import App from '../../ui/App'
import HelloMeteor from '../../ui/HelloMeteor';
Meteor.startup(() => {
    render( < HelloMeteor / > , document.getElementById('app'))
})