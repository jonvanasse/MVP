{/* eslint-disable camelcase */
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_id: Number, // UNIQUE
  handle: String,
  first_name: String,
  last_name: String,
  watching: [Number], // POST IDs (NOT OWNED)
  upvoted: [Number], // POST IDs (NOT OWNED)
  downvoted: [Number], // POST IDs (NOT OWNED)
  posts: [Number] // POST IDs (OWNED)
});

const postSchema = new mongoose.Schema({
  post_id: Number,
  owner: Number, // user_id
  body: String,
  start: Date, // (past or recent)
  end: Date, // MUST be later than start
  watchers: [
    user_id: Number,
    up_down_watch: Number // will map 1 to upvote, 2 to downvote, and 3 to watch
  ]
  upvotes: Number, // Total # of 1s
  downvotes: Number, // Total # of 2s
  watch_no_vote: Number, // Total # of 3s
  watch_count: Number, // Total Watchers incl. upvotes/downvotes
  hit: Boolean | null, // null until the end date, then a verdict must be reached
  comments: [{
    user_id: Number,
    parent: Number, // comment_id or post_id
    children: [Number], //comment_ids
    body: String,
    start: Date,
    agree: Boolean | null // corresponds to whether or not the commenting user upvoted/downvoted/abstained from voting
  }] // comment_ids
});

const daySchema = new mongoose.Schema({
  day_id: Number,
  day: Date,
  posts_started: [{
    owner: Number, // user_id
    body: String,
    start: Date, // Date prediction was made
    end: Date, // Date the prediction is supposed to come true
    watchers: [
      user_id: Number,
      up_down_watch: Number // will map 1 to upvote, 2 to downvote, and 3 to watch
    ]
    upvotes: Number, // Total # of 1s
    downvotes: Number, // Total # of 2s
    watch_no_vote: Number, // Total # of 3s
    watch_count: Number, // Total Watchers incl. upvotes/downvotes
    hit: Boolean | null, // null until the end date, then a verdict must be reached
    comments: [{
      user_info: {
        user_id: Number,
        handle: String,
        first_name: String,
        last_name: String,
      }
      parent: Number, // comment_id or post_id
      children: [Number], //comment_ids
      body: String,
      start: Date,
      agree: Boolean | null // corresponds to whether or not the commenting user upvoted/downvoted/abstained from voting
    }] // comment_ids
  }], // post_ids for posts made on this day
  posts_ended: [{
    owner: Number, // user_id
    body: String,
    start: Date, // Date prediction was made
    end: Date, // Date the prediction is supposed to come true
    watchers: [
      user_id: Number,
      up_down_watch: Number // will map 1 to upvote, 2 to downvote, and 3 to watch
    ]
    upvotes: Number, // Total # of 1s
    downvotes: Number, // Total # of 2s
    watch_no_vote: Number, // Total # of 3s
    watch_count: Number, // Total Watchers incl. upvotes/downvotes
    hit: Boolean | null, // null until the end date, then a verdict must be reached
    comments: [{
      user_info: {
        user_id: Number,
        handle: String,
        first_name: String,
        last_name: String,
      }
      parent: Number, // comment_id or post_id
      children: [Number], //comment_ids
      body: String,
      start: Date,
      agree: Boolean | null // corresponds to whether or not the commenting user upvoted/downvoted/abstained from voting
    }]
  }]
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);
const Comment = mongoose.model('Comment', commentSchema);
const Day = mongoose.model('Day', daySchema);

module.exports = { User, Post, Comment, Day };
