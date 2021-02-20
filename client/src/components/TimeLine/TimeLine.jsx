import React from 'react';
import Day from '../Day/Day.jsx';
import { BsCaretRightFill, BsCaretLeftFill } from 'react-icons/bs';
import { IoNotifications } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import classes from './TimeLine.module.css';
import './font.css';

class TimeLine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      select: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    const select = this.props.handleChange(index);
    this.setState({
      select: select
    });
  }

  render() {
    const select = this.state.select;
    const days = this.props.days;

    return (
      <div className={classes.container}>
        <div className={classes.title}>
          <div className={classes.icon}>
            <BsCaretLeftFill />
          </div>
          <span>Talking About Time</span>
          <div className={classes.icon}>
            <IoNotifications />
            <CgProfile />
            <BsCaretRightFill />
          </div>
        </div>
        {<div className={classes.days}>
          {days.map((day, idx) => {
            return <Day day={day} key={idx} index={idx} select={select} handleClick={this.handleClick}/>;
          })}
        </div>}
      </div>
    );
  }
}

export default TimeLine;
