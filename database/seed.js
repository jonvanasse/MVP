/* eslint-disable camelcase */
const faker = require('faker');
const db = require('./index.js');
const moment = require('moment');

const nouns = ['Donald Trump', 'The EU', 'Arnold Schwarzeneggar', 'Eugene Goodman', 'Antifa', 'An ancient defrosted Viking', 'Sauron the Deceiver', 'Gandalf', 'Bilbo Baggins'];
const verbs = ['destroys', 'escapes', 'clickbaits', 'rick rolls', 'enjoys the company of', 'threatens', 'clamours for the attentions of'];

const days = [];
const users = [];
const posts = [];
const userCount = 25;
let commentId = 1;

/* HELPER FUNCTIONS */

const completePosts = (up, down, watch, index, start) {
  let post = posts[index];
  let userCopy = [...users];
  userCopy.splice(post.owner - 1, 1);

  for (let i = 0; i < watch; i += 1) {
    let user = Math.round(Math.random() * userCopy.length);
    userCopy.splice(user - 1, 1);
    post.watchers.push(user);
    users[user].watching.push(post.post_id);
    if (i < up) {
      post.agrees.push(user);
      users[user].agree.push(post.post_id);
    } else if (i < (up + down)) {
      post.disagrees.push(user);
      users[user].disagree.push(post.post_id);
    }
  }
  let userCopy = [...users];
  let commentCount = Math.random({watch * Math.random()});
  const minCommentId = commentId;
  for (let i = 0; i < commentCount; i += 1) {
    const coinflip = Math.round(Math.random() * 4) - 3;

    // BELOW: So there's a 1/5 change a comment will not be on the parent original post. Even then, the first two comments will always be on the post. After that, the 1/5 chance is that your comment will be a reply to another comment on the post.
    const parent = coinflip > 0 && i > 1 ?
      faker.random.number({max: commentId - faker.random.number({max: commentId - minCommentId, min: 1}), min: minCommentId}) : post.postId;
      let comment = {
        comment_id: commentId,
        user_id: faker.random.number({max: userCount, min: 1}),
        parent: parent,
        children: [], //comment_ids
        body: String,
        date_made: faker.date.between(start, lastDate),
        agree: Boolean,
        watching: Boolean
      }
      // if it's a reply, add the comment to it's parent comment's children array
      if (parent !== post.postId) {
        post.comments[commentId - parent - 1].children.push(commentId);
      }
      commentId += 1;
    }
}

/* MAIN CYCLE */

for (let i = 1; i <= userCount; i += 1) {
  users.push({
    user_id: i,
    handle: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    watching: [],
    agree: [],
    disagree: [],
    posts: [],
    comments: []
  });
}

for (let i = 90; i >= 0; i -= 1) {
  const start = moment().subtract(i);
  const postCount = faker.random.number({max: 9, min: 3});
  for (let j = 0; j < postCount; j += 1) {
    let end = faker.date.future(Math.random(), start);
    let watchCount = faker.random.number({max: 19, min: 0});
    let upCount = faker.random.number({max: watchCount, min: 0});
    let downCount = faker.random.number({max: watchCount - upCount, min: 0});
    let watchNoVoteCount = watchCount - upCount - downCound;
    posts.push({
      post_id: posts.length + 1;
      owner: faker.random.number({max: userCount, min: 1}),
      body: faker.lorem.paragraph,
      start: start,
      end: end,
      agrees: [],
      agree_count: upCount,
      diagrees: [],
      disagree_count: downCount,
      watchers: [],
      watch_count: watchCount,
      watch_no_vote: watchNoVoteCount,
      comments: []
    });
    users[post.owner].posts.push(posts[i].post_id)
    let posts = completePosts(upCount, downCount, watchCount, i, start);
  }
}
