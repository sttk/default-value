'use strict';

function defaultValue(value, defaultValue, type) {
  if (value == null) {
    return defaultValue;
  }

  if (typeof value === 'number' && isNaN(value)) {
    return defaultValue;
  }

  if (typeof type !== 'string') {
    type = objectType(defaultValue);
  }

  if (objectType(value) === type || typeof value === type) {
    return value;
  }

  return defaultValue;
}

function objectType(value) {
  return Object.prototype.toString.call(value);
}

module.exports = defaultValue;
