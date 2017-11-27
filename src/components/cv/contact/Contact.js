import React, { Component } from 'react'

import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card'

import contact from '../../../img/contact.jpg'

import './Contact.css'

class Contact extends Component {
    render() {
        return (
          <div id="contact">
          <Card className="contact">
            <CardMedia
              overlay={
                <CardTitle
                  title="Contactez-moi ou je fais un malheur !"
                />
              }
            >
              <img src={contact} alt="contact"/>
            </CardMedia>
            <CardText>
                <p>
                <i className="material-icons">mail</i> <a
                href="mailto:jonathan.labejof@gmail.com">jonathan.labejof@gmail.com</a>
                </p>
                <p>
                <i className="material-icons">home</i> <a
                target="_blank" rel="noopener noreferrer"
                href="https://www.google.fr/maps/place/51+Rue+Charles+Denis+Platel,+59120+Loos/@50.6110008,3.0147739,17z/data=!3m1!4b1!4m5!3m4!1s0x47c2d53b68b90587:0x820dd96a689e6c18!8m2!3d50.6109974!4d3.0169626">51 rue Charles Denis Platel, 59120 Loos, France</a>
                </p>
                <p>
                <i className="material-icons">phone</i> <a href="tel:+33782168310">(+33) 7 82 16 83 10</a>
                </p>
            </CardText>
          </Card>
          </div>
        )
    }
}

export default Contact
