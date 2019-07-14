// This component loads the list of emails. It is tightly knit to the selectOption property in the redux reducer which maintains the state as selected from the Sidebar component.Once an unread email is clicked the preview pane is updated and the text boldness is removed. The counter in the sidebar is also updated based on the selection of preview.
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { preview } from '../../store/actions/mailAction';

class MessagesList extends Component {
  updatePreview = (id, e) => {
    e.preventDefault();
    this.props.updatePreview(id);
  }
  render() {
    const { mails } = this.props;
    return (
      <div className="col-sm-5 border-right px-0">
        <ul className="list-group list-group-flush">
          {mails && mails.map((mail, mailKey) => {
            let classes = "list-group-item d-flex cursor-pointer";
            if (mail.hasRead) {
              classes += " text-muted"
            }
            return (
              <li href="#" onClick={(e) => this.updatePreview(mail.mail_id, e)} key={mailKey} className={classes}>
                {mail.name}
                <span className="ml-5">{mail.subject}</span>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mails: state.cacheMail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePreview: (id) => { dispatch(preview(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);