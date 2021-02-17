/* eslint-disable camelcase */
const faker = require('faker');
const db = require('./index.js');

const nouns = ['Donald Trump', 'The EU', 'Arnold Schwarzeneggar', 'Eugene Goodman', 'Antifa', 'An ancient defrosted Viking', 'Sauron the Deceiver', 'Gandalf', 'Bilbo Baggins'];
const verbs = ['destroys', 'escapes', 'clickbaits', 'rick rolls', 'enjoys the company of', 'threatens', 'clamours for the attentions of'];

const days = [];
const users = [];
const posts = [];
const comments = [];

for (let i = 1; i <= 100; i += 1) {
  users.push({
    user_id: i,
    handle: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    watching: [],
    upvoted: [],
    downvoted: [],
    posts: [],
    comments: []
  });
}

for (let i = 90; i >= 0; i -= 1) {
  const start = faker.date.past({days: i});
  const postCount = faker.random.number({max: 9, min: 3});
  for (let j = 0; j < postCount; j += 1) {
    let start = faker.date.recent(i, Date());
    let end = faker.date.future(Math.random(), start);
/*     let watchCount = faker.random.number({max: 19, min: 0});
    let upCount = faker.random.number({max: watchCount, min: 0});
    let downCount = faker.random.number({max: watchCount - upCount, min: 0});
    let watchNoVoteCount = watchCount - upCount - downCound; */
    posts.push({
      user_id: faker.random.number({max: 20, min: 1}),
      body: faker.lorem.paragraph,
      start: start,
      end: end,
      upvotes: upCount,
      downvotes: downCount,
      watch_no_vote: watchNoVoteCount,
      watch_count: watchCount,
      watchers: [],
      hit: null,
      comments: []
    });
    for (let k = 0; k < watchCount; k += 1) {
      let agree;
      let user = Math.round(Math.random() * 100);
      let kind = Math.round(Math.random() * 3);
      kind === 1 ? agree = true : kind === 2 ? agree = false : agree = null;
      let comment = {
        user_id: ,
        parent: Number, // comment_id or post_id
        children: [Number], //comment_ids
        body: String,
        start: Date,
        agree: (Math.round(Math.random() * 3) === 1 ? Boolean | null), // null if not voted
        user_owns_post: faker.random.boolean()
      }
      posts[i].comments.push(comment);


      }
    }
  }
}
