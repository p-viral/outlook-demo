// This is the sidebar component that loads the default menus available when a user logs in. By Default the inbox view is selected which shows a badge of the count of emails that are not read.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faBan, faTrash } from '@fortawesome/free-solid-svg-icons';

class Sidebar extends Component {
  componentDidMount() {
    this.props.selectView(this.props.selectedOption);
  }
  renderMenuList = (inbox, isSpam, isDeleted) => {
    const { isExpanded } = this.props;
    let classes = "border-right fullHeight px-0 ";
    if (isExpanded) classes += ' col-sm-2';
    return (
      <div className={classes}>
        <div className="list-group list-group-flush">
          <li onClick={() => this.props.selectView(1)} className="list-group-item d-flex justify-content-between align-items-center cursor-pointer">
            <FontAwesomeIcon icon={faInbox} />
            {isExpanded ? <React.Fragment>Inbox <span className="badge badge-primary badge-pill">{inbox.length}</span></React.Fragment> : null}
          </li>
          <li onClick={() => this.props.selectView(2)} className="list-group-item d-flex justify-content-between align-items-center cursor-pointer">
            <FontAwesomeIcon icon={faBan} />
            {isExpanded ? <React.Fragment>Spam
            <span className="badge badge-primary badge-pill">{isSpam.length}</span></React.Fragment> : null}
          </li>
          <li onClick={() => this.props.selectView(3)} className="list-group-item d-flex justify-content-between align-items-center cursor-pointer">
            <FontAwesomeIcon icon={faTrash} />
            {isExpanded ? <React.Fragment>Trash
            <span className="badge badge-primary badge-pill">{isDeleted.length}</span></React.Fragment> : null}
          </li>
        </div>
      </div>
    )
  }

  render() {
    const { mails } = this.props;
    const inbox = mails.filter(mail => mail.isDeleted === false && mail.isSpam === false && mail.hasRead === false);
    const isSpam = mails.filter(mail => mail.isSpam === true && mail.hasRead === false);
    const isDeleted = mails.filter(mail => mail.isDeleted === true && mail.hasRead === false);
    return (
      <React.Fragment>
        {this.renderMenuList(inbox, isSpam, isDeleted)}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mails: state.mails,
    isExpanded: state.isExpanded,
    selectedOption: state.selectedOption
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectView: (box_id) => { dispatch({ type: 'UPDATE_BOX', box_id }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
