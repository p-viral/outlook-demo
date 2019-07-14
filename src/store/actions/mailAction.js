export const toggleSidebar = () => {
  return {
    type: 'EXPAND_COLLAPSE'
  }
}

export const search = (searchValue) => {
  return {
    type: 'SEARCH_CACHE_MAILS',
    searchValue
  }
}

export const messagesList = (box_id) => {
  return {
    type: 'UPDATE_BOX',
    box_id
  }
}

export const preview = (id) => {
  return {
    type: 'UPDATE_PREVIEW',
    id
  }
}

export const deleteMail = (mail_id) => {
  return {
    type: 'DELETE_MAIL',
    mail_id
  }
}