import React, { Component } from 'react'
//import Wisiwig from 'react-wysiwyg-editor'
import Wisiwig from './commons/wysiwyg'
import ListesAbonnements from './ListAbonnement'

import $ from 'jquery'

class Administration extends Component{
   constructor(props){
      super(props)
      this.state = {
                     abonnements: [{name:'free', price :'0', description : "<ul>" +
                                            "<li>Nombre d'application limiter à une</li>" +
                                            "<li>Limiter à 15 jours </li>" +
                                            "</ul>", order:"0", duration:"15 jours"},
                                            {name:"premium" , price :'500', description : "<ul>" +
                                            "<li>Nombre d'application limiter à 10</li>" +
                                            "<li>Limiter à 12 mois </li>" +
                                            "</ul>", order:"0", duration:"12 mois"},
                                            {name:"business" , price :'1500', description : "<ul>" +
                                            "<li>Nombre d'application illimité</li>" +
                                            "<li>Limiter à 24 mois </li>" +
                                            "</ul>", order:"1", duration:"24 mois"},
                                            {name:"pro" , price :'2500', description : "<ul>" +
                                            "<li>Nombre d'application illimité</li>" +
                                            "<li>à vie </li>" +
                                            "</ul>", order:"0", duration:"à vie"}
                          ],
                     MentionsLegales:'<h1>Mentions légales</h1>'+
                  '</br>'+
                  'Merci de lire avec attention les différentes modalités d\’utilisation du présent site avant d\’y parcourir ses pages. En vous connectant sur ce site, vous acceptez sans réserves les présentes modalités. Aussi, conformément à l\’article n°6 de la Loi n°2004-575 du 21 Juin 2004 pour la confiance dans l\’économie numérique, les responsables du présent site internet <a href="http://www.dataface.fr">www.dataface.fr</a> sont :'+
                  '</br>'+
                  '<p style="color: #b51a00;"><span style="color: rgb(0, 0, 0);"><b>Editeur du Site : </b></span></p>'+
                  'it-academy.fr'+
                  'Numéro de SIRET :  791 915 168 00011'+
                  'Responsable editorial : team ip formation dataface'+
                  '6 Place Charles Hernu, 69100 Villeurbanne'+
                  'Téléphone :04 82 53 81 64 - Fax : 04 82 53 81 99'+
                  'Email : dataface@gmail.com'+
                  'Site Web : <a href="http://www.dataface.fr">www.dataface.fr</a>'+
                  '</br>'+
                  '<p style="color: #b51a00;"><b><span style="color: rgb(0, 0, 0);">Hébergement :</span> </b></p>'+
                  'Hébergeur : amazon'+
                  'Seattle, Washington, États-Unis'+
                  'Site Web :  <a href="http://www.amazon.fr">www.amazon.fr</a>'+
                  '</br>'+
                  '<p style="color: #b51a00;"><span style="color: rgb(0, 0, 0);"><b>Développement</b><b> : </b></span></p>'+
                  'team dataface ipformation'+
                  'Adresse : 6 Place Charles Hernu, 69100 Villeurbanne'+
                  'Site Web : <a href="http://www.ecole-ipssi.com/">www.ecole-ipssi.com/</a>'+
                  '</br>'+
                  '<p style="color: #b51a00;"><span style="color: rgb(0, 0, 0);"><b>Conditions d\’utilisation : </b></span></p>'+
                  'Ce site (<a href="http://www.dataface.fr">www.dataface.fr</a>) est proposé en différents langages web (HTML, HTML5, Javascript, CSS, etc…) pour un meilleur confort d\'utilisation et un graphisme plus agréable, nous vous recommandons de recourir à des navigateurs modernes comme Internet explorer, Safari, Firefox, Google Chrome, etc…'+
                  'Les mentions légales ont été générées sur le site <a title="générateur de mentions légales pour site internet gratuit" href="http://www.generateur-de-mentions-legales.com">Générateur de mentions légales</a>, offert par <a title="imprimerie paris, imprimeur paris" href="http://welye.com">Welye</a>.'+
'</br>'+
                  '<span style="color: #323333;">it-academy.fr<b> </b></span>met en œuvre tous les moyens dont elle dispose, pour assurer une information fiable et une mise à jour fiable de ses sites internet. Toutefois, des erreurs ou omissions peuvent survenir. L\'internaute devra donc s\'assurer de l\'exactitude des informations auprès de , et signaler toutes modifications du site qu\'il jugerait utile. n\'est en aucun cas responsable de l\'utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.'+
'</br>'+
                  '<b>Cookies</b> : Le site <a href="http://www.dataface.fr">www.dataface.fr</a> peut-être amené à vous demander l\’acceptation des cookies pour des besoins de statistiques et d\'affichage. Un cookies est une information déposée sur votre disque dur par le serveur du site que vous visitez. Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations . Certaines parties de ce site ne peuvent être fonctionnelles sans l\’acceptation de cookies.'+
'</br>'+
                  '<b>Liens hypertextes :</b> Les sites internet de peuvent offrir des liens vers d’autres sites internet ou d’autres ressources disponibles sur Internet. it-academy.fr ne dispose d\'aucun moyen pour contrôler les sites en connexion avec ses sites internet. ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes, et notamment des informations, produits ou services qu\’ils proposent, ou de tout usage qui peut être fait de ces éléments. Les risques liés à cette utilisation incombent pleinement à l\'internaute, qui doit se conformer à leurs conditions d\'utilisation.'+
'</br>'+
                  'Les utilisateurs, les abonnés et les visiteurs des sites internet de ne peuvent mettre en place un hyperlien en direction de ce site sans l\'autorisation expresse et préalable de it-academy.fr.'+
'</br>'+
                  'Dans l\'hypothèse où un utilisateur ou visiteur souhaiterait mettre en place un hyperlien en direction d’un des sites internet de it-academy.fr, il lui appartiendra d\'adresser un email accessible sur le site afin de formuler sa demande de mise en place d\'un hyperlien. it-academy.fr se réserve le droit d’accepter ou de refuser un hyperlien sans avoir à en justifier sa décision.'+
                  '</br>'+
                  '<p style="color: #b51a00;"><span style="color: rgb(0, 0, 0);"><b>Services fournis : </b></span></p>'+
                  '<p style="color: #323333;">L\'ensemble des activités de la société ainsi que ses informations sont présentés sur notre site <a href="http://www.dataface.fr">www.dataface.fr</a>.</p>'+
                  '<p style="color: #323333;">it-academy.fr s’efforce de fournir sur le site www.dataface.fr des informations aussi précises que possible. les renseignements figurant sur le site <a href="http://www.dataface.fr">www.dataface.fr</a> ne sont pas exhaustifs et les photos non contractuelles. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne. Par ailleurs, tous les informations indiquées sur le site www.dataface.fr<span style="color: #000000;"><b> </b></span>sont données à titre indicatif, et sont susceptibles de changer ou d\’évoluer sans préavis.  </p>'+
                  '</br>'+
                  '<p style="color: #b51a00;"><span style="color: rgb(0, 0, 0);"><b>Limitation contractuelles sur les données : </b></span></p>'+
                  'Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l’année, mais peut toutefois contenir des inexactitudes ou des omissions. Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, à l’adresse dataface@gmail.com, en décrivant le problème de la manière la plus précise possible (page posant problème, type d’ordinateur et de navigateur utilisé, …).'+

                  'Tout contenu téléchargé se fait aux risques et périls de l\'utilisateur et sous sa seule responsabilité. En conséquence, ne saurait être tenu responsable d\'un quelconque dommage subi par l\'ordinateur de l\'utilisateur ou d\'une quelconque perte de données consécutives au téléchargement. <span style="color: #323333;">De plus, l\’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour</span>'+

                  'Les liens hypertextes mis en place dans le cadre du présent site internet en direction d\'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de it-academy.fr.'+
                  '</br>'+
                  '<p style="color: #b51a00;"><span style="color: rgb(0, 0, 0);"><b>Propriété intellectuelle :</b></span></p>'+
                  'Tout le contenu du présent sur le site <a href="http://www.dataface.fr">www.dataface.fr</a>, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de la société à l\'exception des marques, logos ou contenus appartenant à d\'autres sociétés partenaires ou auteurs.'+

                  'Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l\'accord exprès par écrit de it-academy.fr. Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle. Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur. En outre, les propriétaires des Contenus copiés pourraient intenter une action en justice à votre encontre.'+
                  '</br>'+
                  '<p style="color: #b51a00;"><span style="color: rgb(0, 0, 0);"><b>Déclaration à la CNIL : </b></span></p>'+
                  'Conformément à la loi 78-17 du 6 janvier 1978 (modifiée par la loi 2004-801 du 6 août 2004 relative à la protection des personnes physiques à l\'égard des traitements de données à caractère personnel) relative à l\'informatique, aux fichiers et aux libertés, ce site n\'a pas fait l\'objet d\'une déclaration  auprès de la Commission nationale de l\'informatique et des libertés (<a href="http://www.cnil.fr/">www.cnil.fr</a>).'+
                  '</br>'+
                  '<p style="color: #b51a00;"><span style="color: rgb(0, 0, 0);"><b>Litiges : </b></span></p>'+
                  'Les présentes conditions du site <a href="http://www.dataface.fr">www.dataface.fr</a> sont régies par les lois françaises et toute contestation ou litiges qui pourraient naître de l\'interprétation ou de l\'exécution de celles-ci seront de la compétence exclusive des tribunaux dont dépend le siège social de la société. La langue de référence, pour le règlement de contentieux éventuels, est le français.'+
                  '</br>'+
                  '<p style="color: #b51a00;"><span style="color: rgb(0, 0, 0);"><b>Données personnelles :</b></span></p>'+
                  'De manière générale, vous n\’êtes pas tenu de nous communiquer vos données personnelles lorsque vous visitez notre site Internet <a href="http://www.dataface.fr">www.dataface.fr</a>.',
               confidentialite:'Le <i>Générateur de politique de confidentialité</i> est un questionnaire. La politique qui vous est présentée ici tient compte des réponses que vous avez fournies. <u>Cette politique n\'est qu\'un modèle</u>. En effet, le <i>Générateur de politique de confidentialité</i> <u>n\'a pas pour fonction de certifier</u> vos engagements en matière de protection des renseignements personnels. <br>'+
                  'Par conséquent, ni le recours au <i>Générateur de politique de confidentialité</i>, ni la politique qui est ici présentée <u>ne constituent un avis juridique</u>. En aucun cas, ces outils ne sauraient remplacer une expertise spécifique dans des cas particuliers. Les personnes qui sont confrontées avec un problème spécifique d\'application de la loi sont invitées à consulter un avocat ou un notaire.'+
                  '<hr>'+

                  '<h1>Politique modèle de confidentialité.</h1>'+
                  '<p>'+
                  'Nous nous engageons à ne collecter aucun renseignement personnel, d\'aucune sorte que ce soit.'+
                  '</p>',

              displaymodaladduser:false,
              btnadduser:true,
            }
      }

   render() {
      var self = this;
      var editorStyle = {
        overflow: 'auto',
        width: '100%',
        height: 300,
        maxHeight: 300
    }
      return (
         <div className="Users">
             <div className="container">
               <div className="content">
                  <div className="row">
                     <div className="col m12 s12 l12 ">
                        <div className="row title">
                           <div className="col m2 l2 s2 left-align adduser">
                             <a className="btn-floating btn-large waves-effect waves-light red"  ><i className="material-icons">add</i></a>
                           </div>
                           <div className="col s10 m10 l10 center-align">
                              <h2>Liste des produits</h2>
                           </div>
                        </div>
                           <table className="responsive-table">
                              <thead>
                                  <tr>
                                      <th data-field="name">Name</th>
                                      <th data-field="price">Prix</th>
                                      <th data-field="duration">Durée</th>
                                      <th data-field="order">Privilège d'affichage</th>
                                      <th data-field="action">Actions</th>

                                  </tr>
                              </thead>

                              <tbody>
                                 {
                                    this.state.abonnements.map(function(abonnement, i){
                                       return <ListesAbonnements key={i} abonnement={abonnement}/>
                                    })
                                 }
                             </tbody>
                          </table>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col m12 s12 l12 ">
                        <div className="col s10 m10 l10 center-align">
                           <h2>Confidentialité</h2>
                        </div>
                        <div className="form-group confidentialite">
                           <label>Confidentialité:</label>
                      

                           <Wisiwig className="Wisiwig btn-group" style={editorStyle} content={this.state.confidentialite} onChange={this.handleContentChange} />
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col m12 s12 l12 ">
                        <div className="col s10 m10 l10 center-align">
                           <h2>Mentions Légales</h2>
                        </div>
                     </div>
                     <div className="form-group ml">
                        <label>Mentions Légales:</label>
                        <Wisiwig style={editorStyle} content={this.state.MentionsLegales} onChange={this.handleMentionsLegalesContentChange} />
                     </div>
                  </div>
               </div>
            </div>

        </div>
      )

   }
   handleContentChange (e)  {
      this.setState({content: e.target.value});
   }
   handleMentionsLegalesContentChange (e)   {
      this.setState({content: e.target.value});
   }


}

export default Administration
