import React, { Component } from 'react'

import { FormattedMessage } from 'react-intl'

import { Timeline, TimelineEvent } from 'react-event-timeline'

import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import School from 'material-ui/svg-icons/social/school'
import Business from 'material-ui/svg-icons/places/business-center'

const educations = [
    {
        title: 'Doctorat spécialité informatique',
        subtitle: 'Contrat CIFRE avec la société THALES et Inria. Université Lille 1 - Sciences et Technologies, Lille & Palaiseau, France',
        createdAt: '2012-12-20 (3 ans)',
        children: (
            <div>
            <p>
            Description: Conception, supervision et contrôle des systèmes de systèmes (SoS) pour différents domaines applicatifs tels que l’embarqué, le temps-réel ou encore les systèmes d’information
            </p>
            <p>
            Sujet: Réflexivité au service de l’Évolution des Systèmes de Systèmes.
            </p>
            <p>
            Encadrants: Lionel Seinturier, Philippe Merle, Hugues Vincent et Antoine Léger – Inria,
THALES, IUF
            </p>
            </div>
        )
    },
    {
        createdAt: '2009-06',
        title: 'Master d’informatique – Spécialité E-Services – Intergiciels et interactions homme-machine',
        subtitle: 'Université Lille 1 - Sciences et Technologies, Lille – Palaiseau, France',
        children: (
            <div>
            <p>
            Effectué en alternance (contrat de professionnalisation) avec la société THALES.
            </p>
            </div>
        )
    },
    {
        createdAt: '2007-06',
        title: 'Master d’informatique – Spécialité Graphes et Méthodes Formelles (GMF)',
        subtitle: 'Université Bordeaux 1, Bordeaux, France',
        children: (
            <div>
            <p>
            Stage en entreprise non validé car trop orienté professionnel
            </p>
            </div>
        )
    },
    {
        createdAt: '2006-06',
        title: 'Licence d’informatique',
        subtitle: 'Université Lille 1 - Sciences et Technologies, Lille, France',
    },
]

educations.forEach(education => {
    education.icon = (<School />)
    education.type = 'education'
    education.container = 'card'
    education.iconColor = 'lightgreen'
    education.cardHeaderStyle = {
        backgroundColor: 'lightgreen',
        color: 'white'
    }
})

const experiences = [
    {
        createdAt: '2017-09 (4 mois)',
        title: 'Directeur général associé',
        subtitle: 'SAS Link Society, 3 associés, Lille, France',
        children: (
            <div>
            <p>Relation client avec un service en radiologie, un psychiatre et des startups</p>
            <p>Participation à la rédaction des documents administratifs et aux démarches de la création d’entreprise</p>
            <p>Rédaction de cahier des charges et développement d’un logiciel de suivi de patient en radiologie (ReactJS, Flask, PostgreSQL)</p>
            <p>Développement d’un SaaS de génération d’API par du glissé/déposé de composants (ReactJS, NodeJS, Erlang)</p>
            <p>Rédaction de cahier des charges et développement d’une application mobile d’aide à l’apprivoisement des écrans 3-6-9-12 (React-native, NodeJS, MongoDB)</p>
            </div>
        )
    },
    {
        createdAt: '2013-09 (3 ans et 1 mois)',
        title: 'Développeur en chef d\'une équipe de 10 personnes',
        subtitle: 'SSLL Capensis, Wasquehal, France',
        children: (
            <div>
            <p>Organisation du développement du logiciel d’hypervision Open Source Canopsis (méthodes agîles)</p>
            <p>Développement du backend de traitement complexe des évènements (Linux, Python, MongoDB, RabbitMQ, Redis)</p>
            <p>Développement du frontend de visualisation des données (ExtJS, Ember, d3, JQuery, Bootstrap)</p>
            <p>Rédaction de cahier des charges et mise en production avec le client (RATP, Criteo, Eiffage, Décathlon)</p>
            <p>Rédaction du document justificatif du crédit impôt recherche et compétitivité</p>
            </div>
        )
    },
    {
        title: 'Ingénieur R&D en informatique',
        subtitle: 'OWI Technologies, Bourg-la-Reine, France',
        createdAt: '2013-03 (4 mois)',
        children: (
            <div>
            <p>Consolidation d’un moteur sémantique pour la relation client (C++)</p>
            <p>Développement d’une application WEB côtés clients (ExtJS) et serveur (Windows Server 2008, Tomcat, JavaEE6) pour l’exploitation du moteur sémantique</p>
            <p>Développement du site internet de l’entreprise (Php, MySQL, Javascript)</p>
            </div>
        )
    }, {
        title: 'Ingénieur d’étude en informatique',
        subtitle: 'THALES COMMUNICATIONS & SECURITY, Palaiseau, France',
        createdAt: '2009-09 (3 ans)',
        children: (
            <div>
            <p>Quatre dévelopements dans le projet ANR (Agence Nationale de la Recherche) <a href="https://research.petalslink.org/display/itemis" target="_blank" rel="noopener noreferrer">ITEmIS</a> pour la partie conception et gestion des Systèmes de Systèmes (SoS)</p>
            <p>Dépôt d'un brevet THALES en Europe et aux États-Unis: Service de distribution de données (DDS) réflexif</p>
            <p>Connecteur Service Web (WS) pour la plateforme MyCCM (solution THALES de modèle à composants pour l’embarqué)</p>
            <p>Middleware asynchrone interopérable avec d’autres technologies de communication et adaptative. Présenté au workshop international SCDI (Services and Cloud based Data Integration) le 10 septembre 2012.</p>
            <p>Système de gestion d’un environnement pour les SoS, avec un langage dédié pour faciliter son utilisation.</p>
            </div>
        )
    }, {
        title: 'Apprentissage au poste d’ingénieur en informatique dans les Systèmes de Systèmes (SoS)',
        subtitle: 'THALES COMMUNICATIONS & SECURITY, Colombes, France',
        createdAt: '2008-09 (1 an)',
        children: (
            <div>
            <p>Développement d’un modeleur de SoS</p>
            <p>Méta-modélisation avec cohérence du modèle modifiable à l’exécution</p>
            <p>Gestion du multi-vue avec écriture d’algorithmes d’affichage</p>
            <p>Démonstrateur avec la table tactile Surface&copy; de Microsoft&copy;</p>
            <p>Développement d’un outil de modélisation pour l’aide à la décision d’étude de marché</p>
            </div>
        )
    }, {
        title: 'Stage d’informatique dans les Systèmes de Systèmes (SoS)',
        subtitle: 'THALES COMMUNICATIONS & SECURITY, Colombes, France',
        createdAt: '2007-01 (6 mois)',
        children: (
            <div>
            <p>Langage dédié (DSL) à la configuration d’un SoS. La technologie de construction du DSL est la technologie DSL Tools&copy; de Microsoft&copy;</p>
            </div>
        )
    }
]

experiences.forEach(
    experience => {
        experience.type = 'experience'
        experience.icon = <Business />
        experience.container = 'card'
        experience.iconColor = 'skyblue'
        experience.cardHeaderStyle = {
            backgroundColor: 'skyblue',
            color: 'white'
        }
    }
)

class History extends Component {
    constructor(props) {
        super(props)
        this.state = {
            types: props.types || 'all',
        }
    }
    handleTypes = types => {
        this.setState({ types })
    }
    render() {
        const { dates = [...educations, ...experiences], select = true } = this.props
        const { types } = this.state

        const fDates = dates.filter(date => types === 'all' || types === date.type)

        fDates.sort((a, b) => a.createdAt < b.createdAt)

        const selectField = (
            select ? (
                <div className="no-print">
              <SelectField
                floatingLabelText={<FormattedMessage id="types" />}
                value={types}
                onChange={(event, index, types) => this.handleTypes(types)}
              >
                <MenuItem value="all" primaryText={<FormattedMessage id="all" />}/>
                <MenuItem value="education" primaryText={<FormattedMessage id="education" />}/>
                <MenuItem value="experience" primaryText={<FormattedMessage id="experience" />}/>
              </SelectField>
              </div>
            ) : null
        )

        return (
          <div className="history">
            {selectField}
            <Timeline>
            {
                fDates.map(
                    (date, index) => {
                        return <TimelineEvent key={index} {...date} />
                    }
                )
            }
            </Timeline>
            {selectField}
          </div>
        )
    }
}

export default History
