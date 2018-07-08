import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import React from "react";
import ReactDom from "react-dom";

import { routes } from "../imports/routes/routes";
import { onAuthChange } from "../imports/routes/routes";
import "../imports/startup/simple-schema-configuration.js";

Meteor.startup(() => {
  ReactDom.render(routes, document.getElementById("app"));
});
