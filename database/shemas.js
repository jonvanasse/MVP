/* eslint-disable camelcase */
const faker = require('faker');
const db = require('./index.js');
const mongoose = require('mongoose');

const nouns = ['Donald Trump', 'The EU', 'Arnold Schwarzeneggar', 'Eugene Goodman', 'Antifa', 'An ancient defrosted Viking', 'Sauron the Deceiver', 'Gandalf', 'Bilbo Baggins'];
const verbs = ['destroys', 'escapes', 'clickbaits', 'rick rolls', 'enjoys the company of', 'threatens', 'clamours for the attentions of'];

const userSchema = new mongoose.Schema({
  user_id: Number, // UNIQUE
  handle: String,
  handle: String,
  first_name: String,
  last_name: String,
  watching: [String], // POST IDs (NOT OWNED)
  agree: [String], // POST IDs (NOT OWNED)
  disagree: [String], // POST IDs (NOT OWNED)
  posts: [String] // POST IDs (OWNED)
});

const postSchema = new mongoose.Schema({
  post_id: Number,
  user_id: Number,
  body: String,
  date_made: Date, // (past or recent)
  date_about: Date, // MUST be later than date_made
  agrees: [Number], // User Ids
  agree_count: Number,
  disagrees: [Number], // User Ids
  disagree_count: Number,
  watchers: [Number], // User Ids
  watch_count: Number, // Total Watchers incl. agree/disagrees
  watch_no_vote: Number, // Total Watchers excl. agree/disagrees
  comments: [Number] // comment_ids
});

const commentSchema = new mongoose.Schema({
  comment_id: Number,
  user_id: Number, // Commentor
  parent: Number, // comment_id or post_id
  children: [Number], //comment_ids
  body: String,
  date_made: Date,
  agree: Boolean,
  watching: Boolean
});

const daySchema = new mongoose.Schema({
  day: Date,
  made: [Number], // post_ids for posts made on this day
  about: [Number], // post_ids for posts fulfulled (or not) on this day
  watch_count: Number // count of users watching posts on or about this day
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', userSchema);
const Comment = mongoose.model('Comment', userSchema);
const Day = mongoose.model('Day', daySchema);

module.exports = User, Post, Comment, Day;
