import React, { Component } from 'react'

import { FormattedMessage } from 'react-intl'

import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card'

import hobbies from '../../../img/hobbies.jpg'

class Hobbies extends Component {
    render() {
        return (
          <div id="hobbies">
            <Card>
              <CardMedia
              overlay={<CardTitle  title={<FormattedMessage id="hobbies" />} />}>
                <img src={hobbies} alt="hobbies" />
                </CardMedia>
              <CardText>
              <p>Diverses pratiques du sport depuis 33 ans, et de préférence en équipe</p>
              <p>Intéressé par la physique, la sociologie, la philosophie, l’éducation, l’économie et la politique</p>
              <p>Bénévolat pour aider les démunis et les laissés-pour-compte</p>
              <p>Création d’un collectif "monnaie libre g1" à Lille</p>
              </CardText>
              </Card>
          </div>
        )
    }
}

export default Hobbies
