'use strict';

import fs from 'fs';
import onlyScripts from './util/scriptFilter';
let tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

tasks.forEach(function(task) {
  require('./tasks/' + task);
});
