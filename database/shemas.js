/* eslint-disable camelcase */
const faker = require('faker');
const db = require('./index.js');
const mongoose = require('mongoose');

const nouns = ['Donald Trump', 'The EU', 'Arnold Schwarzeneggar', 'Eugene Goodman', 'Antifa', 'An ancient defrosted Viking', 'Sauron the Deceiver', 'Gandalf', 'Bilbo Baggins'];
const verbs = ['destroys', 'escapes', 'clickbaits', 'rick rolls', 'enjoys the company of', 'threatens', 'clamours for the attentions of'];

const userSchema = new mongoose.Schema({
  handle: String,
  user_id: Number, // UNIQUE
  handle: String,
  first_name: String,
  last_name: String,
  watching: [String], // POST IDs (NOT OWNED)
  upvoted: [String], // POST IDs (NOT OWNED)
  downvoted: [String], // POST IDs (NOT OWNED)
  posts: [String] // POST IDs (OWNED)
});

const postSchema = new mongoose.Schema({
  user_id: Number,
  body: String,
  date_made: Date, // (past or recent)
  date_fulfill: Date, // MUST be later than date_made
  upvotes: Number, // Total of watching while agreeing
  downvotes: Number, // Total of watching while disagreeing
  watch_count: Number, // Total Watchers incl. agree/disagrees
  watch_no_vote: Number, // Total Watchers excl. agree/disagrees
  /*   hindsight: Boolean, // if in the past, true: if in the future, false...
  clairvoyant: Boolean, // MUST be false if the date is in the future, or else it must be queued for evaluation */
  topic: String, // only a few topics for the MVP
  comments: [Number] // comment_ids
});

const commentSchema = new mongoose.Schema({
  user_id: Number,
  parent: Number, // comment_id or post_id
  children: [Number], //comment_ids
  body: String,
  date_made: Date,
  agree: Boolean
});

const daySchema = new mongoose.Schema({
  day: Date,
  made: [Number], // post_ids for posts made on this day
  fulfilled: [Number], // post_ids for posts fulfulled (or not) on this day
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', userSchema);
const Comment = mongoose.model('Comment', userSchema);
const Day = mongoose.model('Day', daySchema);

module.exports = User, Post, Comment, Day;
