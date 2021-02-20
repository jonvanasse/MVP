import React from 'react';
import moment from 'moment';
import PostList from './PostList/PostList.jsx';
import TimeLine from './TimeLine/TimeLine.jsx';
import classes from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      select: 0,
      days: [
        { day: moment().add(-7, 'days').format('MMM  Do'), posts: [
          {
            postId: 1,
            userId: 1,
            fullName: 'Marky Mark',
            handle: 'MarbleTang',
            body: 'Tarble narg narg dubrup dochang!',
            dateMade: moment().add(-6, 'days').format('MMM  Do'),
            dateAbout: moment().add(2, 'days').format('MMM  Do'),
            agreed: 3,
            disagreed: 5,
            watching: 11
          },
          {
            postId: 1,
            userId: 1,
            fullName: 'Marky Mark',
            handle: 'MarbleTang',
            body: 'Tarble narg narg dubrup dochang!',
            dateMade: moment().add(-6, 'days').format('MMM  Do'),
            dateAbout: moment().add(2, 'days').format('MMM  Do'),
            agreed: 3,
            disagreed: 5,
            watching: 11
          }
        ], about: 1, watching: 22},
        { day: moment().add(-6, 'days').format('MMM  Do'), posts: [
          {
            postId: 1,
            userId: 1,
            fullName: 'Marky Mark',
            handle: 'MarbleTang',
            body: 'Tarble narg narg dubrup dochang!',
            dateMade: moment().add(-6, 'days').format('MMM  Do'),
            dateAbout: moment().add(2, 'days').format('MMM  Do'),
            agreed: 3,
            disagreed: 5,
            watching: 11
          },
          {
            postId: 1,
            userId: 1,
            fullName: 'Marky Mark',
            handle: 'MarbleTang',
            body: 'Tarble narg narg dubrup dochang!',
            dateMade: moment().add(-6, 'days').format('MMM  Do'),
            dateAbout: moment().add(2, 'days').format('MMM  Do'),
            agreed: 3,
            disagreed: 5,
            watching: 11
          }
        ], about: 3, watching: 11},
        { day: moment().add(-5, 'days').format('MMM  Do'), posts: 2, about: 1, watching: 8},
        { day: moment().add(-4, 'days').format('MMM  Do'), posts: 2, about: 1, watching: 8},
        { day: moment().add(-3, 'days').format('MMM  Do'), posts: 2, about: 1, watching: 8},
        { day: moment().add(-2, 'days').format('MMM  Do'), posts: 2, about: 1, watching: 8},
        { day: moment().add(-1, 'days').format('MMM  Do'), posts: 2, about: 1, watching: 8},
        { day: moment().add(0, 'days').format('MMM  Do'), posts: 2, about: 1, watching: 8},
        { day: moment().add(1, 'days').format('MMM  Do'), posts: 2, about: 1, watching: 8},
        { day: moment().add(2, 'days').format('MMM  Do'), posts: 2, about: 1, watching: 8},
        { day: moment().add(3, 'days').format('MMM  Do'), posts: 2, about: 1, watching: 8},
        { day: moment().add(4, 'days').format('MMM  Do'), posts: 2, about: 1, watching: 8},
        { day: moment().add(5, 'days').format('MMM  Do'), posts: 2, about: 1, watching: 8},
        { day: moment().add(6, 'days').format('MMM  Do'), posts: 2, about: 1, watching: 8},
        { day: moment().add(7, 'days').format('MMM  Do'), posts: 2, about: 1, watching: 8}
      ]
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(index) {
    console.log(index);
    this.setState({
      select: index
    });
    return index;
  }

  render() {

    const days = this.state.days;
    const postList = this.state.days[this.state.select].posts;

    return (
      <div id="app">
        <TimeLine days={days} handleChange={this.handleChange}/>
        <PostList posts={postList} />
      </div>
    );
  }
}

export default App;
