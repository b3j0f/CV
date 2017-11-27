import React, { Component } from 'react'

import { connect } from 'react-redux'

import { FormattedMessage } from 'react-intl'

import C3Chart from 'react-c3js'

class Skills extends Component {
    render() {
        const { messages } = this.props

        const format = v => `${v}/5`
        const human = {
            data: {
                columns: [
                    ['management', 4],
                    ['social', 3],
                    ['humour', 3],
                    ['rigor', 4],
                    ['autonomy', 5],
                    ['energy', 4]
                ],
                type: 'donut',
            },
            donut: {
                title: messages['humans'],
                label: {
                    format
                }
            }
        }
        const languages = {
            data: {
                columns: [
                    ['ES6/ES7', 5],
                    ['Python', 5],
                    ['Java', 3],
                    ['C#, F#, C++, C', 3],
                    ['Scala', 3],
                    ['OCaml, Scheme and erlang', 3],
                    ['PHP', 4],
                ],
                type: 'donut',
                labels: true
            },
            donut: {
                title: messages['languages'],
                label: {
                    format
                }
            }
        }
        const framework = {
            data: {
                columns: [
                    ['React-Native', 5],
                    ['ReactJS', 5],
                    ['Ionic', 3],
                    ['Django', 5],
                    ['Flask', 4],
                    ['Ember', 2],
                    ['d3', 4],
                    ['FraSCAti', 4],
                    ['ExtJS', 3],
                ],
                type: 'donut',
                labels: true
            },
            donut: {
                title: messages['framework'],
                label: {
                    format
                }
            }
        }
        const bdd = {
            data: {
                columns: [
                    ['PostgreSQL', 4],
                    ['MongoDB', 4],
                    ['MySQL', 4],
                    ['Cassandra', 3],
                ],
                type: 'donut',
                labels: true
            },
            donut: {
                title: messages['databases'],
                label: {
                    format
                }
            }
        }
        const middleware = {
            data: {
                columns: [
                    ['DDS/OpenSplice', 4],
                    ['JMS/JORAM', 5],
                    ['AMQP/RabbitMQ', 4],
                    ['0MQ', 5],
                    ['JGroups', 2],
                ],
                type: 'donut',
                labels: true
            },
            donut: {
                title: messages['middleware'],
                label: {
                    format
                }
            }
        }
        const os = {
            data: {
                columns: [
                    ['Windows', 3],
                    ['Linux', 4],
                    ['MacOSX', 3],
                ],
                type: 'donut',
                labels: true
            },
            donut: {
                title: messages['os'],
                label: {
                    format
                }
            }
        }
        const charts = [
            <C3Chart {...human} />,
            <C3Chart {...languages} />,
            <C3Chart {...framework} />,
            <C3Chart {...bdd} />,
            <C3Chart {...middleware} />,
            <C3Chart {...os} />,
        ]

        return (
          <div>
            <FormattedMessage id="skills" />

            <div className="row">
            {
                charts.map(
                    (chart, index) => (
                      <div key={index} className="col s4">
                        {chart}
                      </div>
                    )
                )
            }
            </div>
          </div>
        )
    }
}

const mapStateToProps = state => ({
    messages: state.intl.messages,
})

export default connect(mapStateToProps)(Skills)
