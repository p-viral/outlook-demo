// Search Component at the top of the page. Also a header page which includes option to collapse and expand the sidebar.
import React, { Component } from 'react';
import auth from '../../services/auth';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';

class Header extends Component {

  handleCollapse = () => {
    this.props.handleCollapse();
  }

  handleOnChange = (e) => {
    if (e.target.value) {
      this.props.searchCacheMais(e.target.value);
    } else {
      this.props.selectView(this.props.selectedOption)
    }

  }

  render() {
    return (
      <div className="col-md-12 border-bottom">
        <div className="row">
          <div className="col-sm-1 my-auto">
            <button className="btn btn-secondary" onClick={this.handleCollapse}><FontAwesomeIcon icon={faBars} /></button>
          </div>
          <div className="col-sm-10">
            <form className="form-inline my-2 my-lg-12">
              <input className="form-control col-sm-12" type="search" placeholder="Search by Name" aria-label="Search" onChange={this.handleOnChange} />
            </form>
          </div>
          <div className="col-sm-1 my-2">
            <button className="btn btn-outline-danger float-right" onClick={() => {
              auth.logout(() => {
                this.props.history.push('/');
              });
            }}>Logout?
              </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchValue: state.searchValue,
    selectedOption: state.selectedOption
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleCollapse: () => { dispatch({ type: 'EXPAND_COLLAPSE' }) },
    searchCacheMais: (searchValue) => { dispatch({ type: 'SEARCH_CACHE_MAILS', searchValue }) },
    selectView: (box_id) => { dispatch({ type: 'UPDATE_BOX', box_id }) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
