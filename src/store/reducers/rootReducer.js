const initState = {
  isExpanded: true,
  selectedOption: 1,
  mails: [
    {
      mail_id: 1,
      name: 'John Doe',
      from: 'user1@gmail.com',
      subject: 'React Redux outlook demo 1',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eius consequuntur quas aut vel ullam? Asperiores iure accusantium et, doloremque porro possimus recusandae similique quia vero distinctio, provident, eveniet voluptatem.',
      hasRead: false,
      isDeleted: false,
      date: Date.now(),
      isSpam: false,
    },
    {
      mail_id: 2,
      name: 'Jane Mac',
      from: 'user2@gmail.com',
      subject: 'React Redux outlook demo 2',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eius consequuntur quas aut vel ullam? Asperiores iure accusantium et, doloremque porro possimus recusandae similique quia vero distinctio, provident, eveniet voluptatem.',
      hasRead: false,
      isDeleted: false,
      date: Date.now(),
      isSpam: false,
    },
    {
      mail_id: 3,
      name: 'Shawn Mendis',
      from: 'user3@gmail.com',
      subject: 'React Redux outlook demo 3',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eius consequuntur quas aut vel ullam? Asperiores iure accusantium et, doloremque porro possimus recusandae similique quia vero distinctio, provident, eveniet voluptatem.',
      hasRead: false,
      isDeleted: true,
      date: Date.now(),
      isSpam: false,
    },
    {
      mail_id: 4,
      name: 'Taylor Swift',
      from: 'user4@gmail.com',
      subject: 'React Redux outlook demo 4',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eius consequuntur quas aut vel ullam? Asperiores iure accusantium et, doloremque porro possimus recusandae similique quia vero distinctio, provident, eveniet voluptatem.',
      hasRead: true,
      isDeleted: false,
      date: Date.now(),
      isSpam: true,
    },
    {
      mail_id: 5,
      name: 'Mantis Lord',
      from: 'user1@gmail.com',
      subject: 'React Redux outlook demo 1',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eius consequuntur quas aut vel ullam? Asperiores iure accusantium et, doloremque porro possimus recusandae similique quia vero distinctio, provident, eveniet voluptatem.',
      hasRead: false,
      isDeleted: false,
      date: Date.now(),
      isSpam: false,
    },
    {
      mail_id: 6,
      name: 'Royal Barista',
      from: 'user2@gmail.com',
      subject: 'React Redux outlook demo 2',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eius consequuntur quas aut vel ullam? Asperiores iure accusantium et, doloremque porro possimus recusandae similique quia vero distinctio, provident, eveniet voluptatem.',
      hasRead: false,
      isDeleted: false,
      date: Date.now(),
      isSpam: false,
    },
    {
      mail_id: 7,
      name: 'Supreme Kai',
      from: 'user3@gmail.com',
      subject: 'React Redux outlook demo 3',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eius consequuntur quas aut vel ullam? Asperiores iure accusantium et, doloremque porro possimus recusandae similique quia vero distinctio, provident, eveniet voluptatem.',
      hasRead: false,
      isDeleted: true,
      date: Date.now(),
      isSpam: false,
    },
    {
      mail_id: 8,
      name: 'Dan Abromov',
      from: 'user4@gmail.com',
      subject: 'React Redux outlook demo 4',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eius consequuntur quas aut vel ullam? Asperiores iure accusantium et, doloremque porro possimus recusandae similique quia vero distinctio, provident, eveniet voluptatem.',
      hasRead: true,
      isDeleted: false,
      date: Date.now(),
      isSpam: true,
    }
  ],
  previewMail: {},
  cacheMail: []
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'EXPAND_COLLAPSE': {
      return {
        ...state,
        isExpanded: !state.isExpanded
      }
    }
    case 'UPDATE_PREVIEW': {
      return {
        ...state,
        cacheMail: state.cacheMail.map((mail) => {
          if (mail.mail_id === action.id) {
            mail.hasRead = true;
          }
          return mail;
        }),
        mails: state.mails.map((mail) => {
          if (mail.mail_id === action.id) {
            mail.hasRead = true;
          }
          return mail;
        }),
        previewMail: state.mails.find(mail => mail.mail_id === action.id)
      }
    }
    case 'DELETE_MAIL': {
      return {
        ...state,
        cacheMail: state.cacheMail.filter(mail => mail.mail_id !== action.mail_id),
        mails: state.mails.map((mail) => {
          if (mail.mail_id === action.mail_id) {
            if (state.selectedOption === 3) {
              mail = {};
            } else {
              mail.isDeleted = true;
            }
          }
          return mail;
        }),
        previewMail: {},
      }
    }
    case 'UPDATE_BOX': {
      if (action.box_id === 1) {
        return {
          ...state,
          cacheMail: state.mails.filter(mail => mail.isDeleted === false && mail.isSpam === false),
          previewMail: {},
          selectedOption: 1
        }
      }
      if (action.box_id === 2) {
        return {
          ...state,
          cacheMail: state.mails.filter(mail => mail.isSpam === true),
          previewMail: {},
          selectedOption: 2
        }
      }
      if (action.box_id === 3) {
        return {
          ...state,
          cacheMail: state.mails.filter(mail => mail.isDeleted === true),
          previewMail: {},
          selectedOption: 3
        }
      }
      break;
    }
    case 'SEARCH_CACHE_MAILS': {
      return {
        ...state,
        cacheMail: state.cacheMail.filter(mail => mail.name.toLowerCase().indexOf(action.searchValue.toLowerCase()) !== -1),
        previewMail: {}
      }
    }
    default:
      return {
        ...state,
        cacheMail: state.mails.map(mail => mail.isDeleted === false && mail.isSpam === false),
        previewMail: {}
      }
  }
}

export default rootReducer;

