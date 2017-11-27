import React, { Component } from 'react'

import { Card, CardHeader, CardText } from 'material-ui/Card'

import head from '../../../img/head.jpg'

import { FormattedMessage } from 'react-intl'

import './Profile.css'

class Profile extends Component {
    render() {
        return (
          <div id="profile">
              <Card>
              <CardHeader
                title="Jonathan Labéjof"
                subtitle={<FormattedMessage id="description" />}
                avatar={head}
              />
              <CardText>
              <div className="row">

                <div className="col s12">
                <p style={{ color: 'green'}}>
                <i className="material-icons">add_circle_outline</i> : <span>Un esprit critique, des larges connaissances, une envie de les partager et des expériences dans de nombreux paradigmes me permettent de m’adapter très rapidement à un nouvel environnement de travail et à de nouvelles technologies. <br />Par exemple, il m’a fallu une journée pour pouvoir utiliser la stack MongoDB, Express, ReactJS, NodeJS de manière avancée.</span>
                </p>
                <p style={{ color: 'lightgreen'}}>
                <i className="material-icons">remove_circle_outline</i> : Le Design, l'UI et l'administration système sont les activités où j'ai le moins d'expérience. <br />J'ai tout de même dû effectuer ce type de tâche pour des grands comptes comme la RATP, et je remercie beaucoup les framework open-source et la documentation pour me mettre à niveau, même si je manque de pratique et de méthodologie dans ces domaines.
                </p>
                </div></div>
              </CardText>
              </Card>
            </div>
        )
    }
}

export default Profile
