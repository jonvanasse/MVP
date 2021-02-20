import React from 'react';
import classes from './Post.module.css';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';
import { BsEye, BsReply } from 'react-icons/bs';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post,
      agree: null,
      watch: false,
      agreeCount: this.props.post.agreed,
      disagreeCount: this.props.post.disagred,
      watchCount: this.props.post.watching
    };

    this.toggleAgree = this.toggleAgree.bind(this);
    this.toggleDisagree = this.toggleDisagree.bind(this);
    this.toggleWatch = this.toggleWatch.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  toggleAgree(event) {
    let target = document.getElementById(event.target.id);
    let agree = this.state.agree;
    let agreeCount = this.state.agreeCount;
    if (agree === null) {
      target.style['fill'] = 'black';
      this.setState({
        agree: true,
        agreeCount: agreeCount += 1
      });
    } else if (agree === false) {
      let disagreeCount = this.state.disagreeCount;
      target.style['fill'] = 'black';
      this.setState({
        agree: true,
        agreeCount: agreeCount += 1,
        disagreeCount: disagreeCount -= 1
      });
    } else {
      target.style['fill'] = 'none';
      this.setState({
        agree: null,
        agreeCount: agreeCount -= 1
      });
    }
  }

  toggleDisagree(event) {
    let target = document.getElementById(event.target.id);
    let agree = this.state.agree;
    let disagreeCount = this.state.disagreeCount;
    if (agree === true) {
      target.style['fill'] = 'black';
      let agreeElem = document.getElementById(`thumbUp${this.props.index}`);
      agreeElem.style['fill'] = 'none';
      let agreeCount = this.state.agreeCount;
      this.setState({
        agree: false,
        agreeCount: agreeCount -= 1,
        disagreeCount: disagreeCount += 1
      });
    } else if (agree === null) {
      target.style['fill'] = 'black';
      this.setState({
        agree: false,
        disagreeCount: disagreeCount += 1
      });
    } else {
      target.style['fill'] = 'none';
      this.setState({
        agree: null,
        disagreeCount: disagreeCount -= 1
      });
    }
  }

  toggleWatch(event) {
    let target = document.getElementById(event.target.id);
    let watch = this.state.watch;
    if (watch === false) {
      target.style['fill'] = 'black';
      this.setState({
        watch: true
      });
    } else {
      target.style['fill'] = 'none';
      this.setState({
        watch: false
      });
    }
  }

  handleClick(event) {
    console.log(event.target.id);
  }

  render () {
    const post = this.state.post;
    const sum = post.agreed + post.disagreed + post.watching;
    const agreePct = (post.agreed / sum) * 100;
    const watchPct = ((post.watching + post.agreed) / sum) * 100;

    return (
      <div className={classes.container}>
        <div className={classes.post}>
          <div className={classes.user}>
            <div>
              {post.fullName}
            </div>
            <span>
              @{post.handle}
            </span>
          </div>
          <div className={classes.reply}>
            <div>
              <BsReply id={`reply${this.props.index}`} onClick={this.handleClick}/>
            </div>
          </div>
          <p className={classes.body}>
            {post.body}
          </p>
          <div className={classes.info}>
            <span>Date Made: {post.dateMade}</span>
            <span>Judgement Day: {post.dateAbout}</span>
          </div>
          <div className={classes.communityBar} style={{'background': `linear-gradient(to right, rgb(170,255,150) 0% ${agreePct - 2}%, white ${agreePct + 2}% ${watchPct - 2}%, rgb(255,170,170) ${watchPct + 2}% 100%)`}}>
            <span>
              {`${post.agreed} `}
              <FiThumbsUp id={`thumbUp${this.props.index}`} onClick={this.toggleAgree}/>
            </span>
            <span>
              {`${post.watching} `}
              <BsEye id={`watch${this.props.index}`} onClick={this.toggleWatch}/>
            </span>
            <span>
              <FiThumbsDown id={`thumbDown${this.props.index}`} onClick={this.toggleDisagree}/>
              {` ${post.disagreed}`}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
