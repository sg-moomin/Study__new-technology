
'use strict';

const e = React.createElement;

class startButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return '세무민의 퇴근후 공부하기 시리즈 시작 제 ' + this.props.commentID + "탄";
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

document.querySelectorAll('.like_button_container')
  .forEach(domContainer => {
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(
      e(startButton, { commentID : commentID}),
      domContainer
    );
  });
