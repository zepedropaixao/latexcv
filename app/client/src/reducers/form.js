import { reducer } from 'redux-form'
import {
  CLEAR_SCHOOL_FIELD,
  CLEAR_JOB_FIELD,
  CLEAR_JOB_DUTY_FIELD,
  CLEAR_PROJECT_FIELD,
  CLEAR_SKILL_FIELD,
  CLEAR_AWARD_FIELD
} from '../constants'

const defaultForm = {
  'values': {
    'profile': {
      'fullName': 'Pedro Azeredo Paixão',
      'email': 'zepedropaixao@gmail.com',
      'phoneNumber': '(+351) 914 968 571',
      'address': 'Porto, Portugal',
      'link': 'github.com/zepedropaixao'
    },
    'schools': [
      {
        'location': 'Porto, Portugal',
        'name': 'Faculty of Engineering of the University of Porto (FEUP)',
        'degree': 'MSc',
        'major': 'Software Engineering',
        'graduationDate': '2010'
      }
    ],
    'jobs': [
      {
        'name': 'Infraspeak',
        'title': 'Lead Android Software Engineer',
        'location': 'Porto, Portugal',
        'startDate': 'April 2016',
        'endDate': 'Present',
        'duties': [
          'Designed the architecture and implemented all the mobile applications used by thousands of maintenance technicians every day'
        ]
      },
      {
        'name': 'SIMI',
        'title': 'Co-Founder, CEO and Team Leader',
        'location': 'Porto, Portugal',
        'startDate': 'April 2012',
        'endDate': 'August 2016',
        'duties': [
          'Defined and implemented the back-end and the mobile applications','Managed the company and sold SIMI to Pizza Hut'
        ]
      },
      {
        'name': 'LeanHub',
        'title': 'Co-Founder and Team Leader',
        'startDate': 'March 2014',
        'endDate': 'December 2014',
        'location': 'Porto, Portugal',
        'duties': [
          'Designed the initial product architecture',
          'Built and managed the R&D team for the project'
        ]
      },
      {
        'name': 'Sapo Labs / LIACC - Artificial Intelligence and Computer Science Lab',
        'title': 'Software Engineering Researcher',
        'duties': [
          'Research topics: Natural Language Processing, Information Extraction, Information Retrieval, Text Mining',
          'OntoExtract project - Implemented and wrote a book about the research involved (ISBN-10: 3659215740)'
        ],
        'endDate': 'March 2012',
        'location': 'Porto, Portugal',
        'startDate': 'September 2010'
      }
    ],
    'skills': [
      {
        'name': 'Programming Languages',
        'details': 'Java, JavaScript, Perl, SQL, PHP, Kotlin, C++, C'
      },
      {
        'name': 'Programming Frameworks',
        'details': 'Android, ionic, jQuery, Laravel, Vue.js, Quasar, Play Framework'
      },
      {
        'name': 'Spoken Languages',
        'details': 'English, Portuguese, French, Spanish, Slovene'
      },
      {
        'name': 'Soft Skills',
        'details': 'Ability to Work Under Pressure, Self-motivation, Creativity, Good communication'
      }
    ],
    'projects': [
      {
        'link': 'https://www.infraspeak.com',
        'name': 'Infraspeak Mobile Applications',
        'description': 'Native Android (Java + kotlin) app with a offline first workflow (MVP Architecture). Also built two adjacent Cordova apps in ionic and Quasar respectively',
        'technologies': 'Java, Vue.js, Angular, ES6, JS, TS'
      },
      {
        'name': 'SIMI Mobile Menu Application',
        'description': 'Sencha Touch + Ext + Cordova Android and iOS applications with a backend made with Java',
        'technologies': 'JS, Ext, Cordova, Java, MySQL',
        'link': 'http://getsimi.com/'
      },
      {
        'name': 'LeanHub Web Application with WebSockets',
        'description': 'Web Application made with Play framework. It has live meeting rooms built using WebSockets',
        'link': 'https://www.lean-hub.com/',
        'technologies': 'Java, Scala, MySQL, Solr, Node.js'
      }
    ],
    'awards': [
      {
        'name': 'Young Entrepreneur of the Year Award',
        'details': 'Infraspeak\'s team won the Young Entrepreneur of the Year Award by ANJE',
        'location': 'Porto, Portugal',
        'date': 'December 2017'
      },
      {
        'name': '500 Startups funding and program participation',
        'details': 'Infraspeak\'s team got into the 500 Startups acceleration program in San Francisco along with seed investment',
        'date': 'July 2016',
        'location': 'San Francisco, California, USA'
      },
      {
        'name': 'Pre-Seed funding for SIMI',
        'details': 'Got a pre-seed investment for the SIMI project',
        'date': 'June 2014',
        'location': 'Porto, Portugal'
      },
      {
        'name': 'Kaizen Institute International Joint-Venture',
        'details': 'Created a joint venture with Kaizen Institute International to build LeanHub',
        'date': 'March 2014',
        'location': 'Porto, Portugal'
      }
    ]
  }
}

function form(state = defaultForm, action) {
  switch (action.type) {
    case CLEAR_SCHOOL_FIELD:
      if (
        !state.values ||
        !state.values.schools ||
        state.values.schools.length <= 1 ||
        state.values.schools.length !== action.schoolCount
      ) {
        return state
      }

      return {
        ...state,
        values: {
          ...state.values,
          schools: state.values.schools.slice(0, -1)
        }
      }

    case CLEAR_JOB_FIELD:
      if (
        !state.values ||
        !state.values.jobs ||
        state.values.jobs.length <= 1 ||
        state.values.jobs.length !== action.jobCount
      ) {
        return state
      }

      return {
        ...state,
        values: {
          ...state.values,
          jobs: state.values.jobs.slice(0, -1)
        }
      }

    case CLEAR_JOB_DUTY_FIELD:
      if (
        !state.values ||
        !state.values.jobs ||
        !state.values.jobs[action.index] ||
        !state.values.jobs[action.index].duties ||
        state.values.jobs[action.index].duties.length <= 1 ||
        action.jobDutyCount !== state.values.jobs[action.index].duties.length
      ) {
        return state
      }

      return {
        ...state,
        values: {
          ...state.values,
          jobs: [
            ...state.values.jobs.slice(0, action.index),
            {
              ...state.values.jobs[action.index],
              duties: state.values.jobs[action.index].duties.slice(0, -1)
            },
            ...state.values.jobs.slice(action.index + 1)
          ]
        }
      }

    case CLEAR_PROJECT_FIELD:
      if (
        !state.values ||
        !state.values.projects ||
        state.values.projects.length <= 1 ||
        state.values.projects.length !== action.projectCount
      ) {
        return state
      }

      return {
        ...state,
        values: {
          ...state.values,
          projects: state.values.projects.slice(0, -1)
        }
      }

    case CLEAR_SKILL_FIELD:
      if (
        !state.values ||
        !state.values.skills ||
        state.values.skills.length <= 1 ||
        state.values.skills.length !== action.skillCount
      ) {
        return state
      }

      return {
        ...state,
        values: {
          ...state.values,
          skills: state.values.skills.slice(0, -1)
        }
      }

    case CLEAR_AWARD_FIELD:
      if (
        !state.values ||
        !state.values.awards ||
        state.values.awards.length <= 1 ||
        state.values.awards.length !== action.awardCount
      ) {
        return state
      }

      return {
        ...state,
        values: {
          ...state.values,
          awards: state.values.awards.slice(0, -1)
        }
      }

    default:
      return state
  }
}

export { form }
export default reducer.plugin({ resume: form })
