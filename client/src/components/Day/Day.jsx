import React from 'react';
import classes from './Day.module.css';
import { GiCrystalBall, GiCrystalShine } from 'react-icons/gi';
import { BsEye } from 'react-icons/bs';

class Day extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let index = this.props.index;
    this.props.handleClick(index);
  }

  render () {
    const className = this.props.select === this.props.index ? `${classes.container} ${classes.select}` : classes.container;
    const { posts, about, watching } = this.props.day;


    return (
      <div className={className} onClick={this.handleClick}>
        <div className={classes.day}>
          {this.props.day.day}
        </div>
        <div className={classes.icons}>
          <GiCrystalBall />
          <GiCrystalShine />
          <BsEye />
        </div>
        <div className={classes.counts}>
          <span>{posts.length}</span>
          <span>{about}</span>
          <span>{watching}</span>
        </div>
      </div>
    );
  }
}

export default Day;
