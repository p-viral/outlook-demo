// Preview component to show the emails that are opened from the messages list component.
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

class MessagePreview extends Component {
  render() {
    const { mail } = this.props;
    return (
      <div className="col-sm-5 mt-3">
        {mail.mail_id ? <React.Fragment>
          <button onClick={() => {
            this.props.deleteMail(mail.mail_id);
          }} className="btn btn-outline-danger"><FontAwesomeIcon icon={faTrash} /></button>
          <h3 className="mt-2">{mail.subject}</h3>
          <h5 className="mt-2">{mail.name} <small className="text-muted ml-2">{mail.from}</small></h5>
          <p>{mail.message}</p>
        </React.Fragment> : 'No preview selected'}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mail: state.previewMail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMail: (mail_id) => { dispatch({ type: 'DELETE_MAIL', mail_id }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagePreview)
