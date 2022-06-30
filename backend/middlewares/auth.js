const httpStatus = require('http-status');
const passport = require('passport');
const APIError = require('../helpers/APIError');
const User = require('../models/user');

const ADMIN = 'admin';
const LOGGED_USER = '_loggedUser';