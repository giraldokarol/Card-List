import { html, LitElement } from "lit";
import './Card.less';
import fakeImage from "../../images/card-media.png";

export class Card extends LitElement {
    static properties = {
        card:{type:Object}
    }

    constructor(){
        super();
        this.card = {};
    }

    createRenderRoot() {
        return this; //Allow the outside styles affect the component
    }

    render(){
        return html `
            <div class="geo_card">
                <div class="geo_card_header">
                    <input type="checkbox" class="geo_card_check" aria-label="Sélectionner la carte de ${this.card.userName}">
                    <div class="geo_card_title">
                        <span aria-hidden="true" class="${this.card.iconClass}"></span>
                        <label>${this.card.userName}</label>
                    </div>
                </div>
                <div class="geo_card_body">
                    <div class="geo_card_image">
                        ${this.card.image == ""
                            ? html `
                                <span class="geo_public_icon" aria-hidden="true"></span>
                            `
                            : html `
                                <img .src="${this.card.image}" alt="image de la ressource ${this.card.name}">
                            `
                        }
                    </div>
                    <div class="geo_card_content">
                        <h3 class="geo_card_name">${this.card.name}</h3>
                        <p class="geo_card_description">${this.card.description}</p>
                        <div class="geo_card_info">
                            <div class="geo_card_date_content">
                                <span><strong>Modifié le</strong></span>
                                <span class="geo_card_date">${this.card.modificationDate}</span>
                            </div>
                            <div class="geo_card_app_content">
                                <span><strong>Application</strong></span>
                                <span class="geo_card_app">Mon Application</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="geo_card_footer">
                    <ul class="geo_card_links">
                        <li class="geo_card_item">
                            <a href="" class="geo_card_link" title="Voir les détails" aria-label="Regarder">
                                <span class="geo_eye_icon" aria-hidden="true"></span>
                            </a>
                        </li>
                        <li class="geo_card_item">
                            <a href="" class="geo_card_link" title="Modifier la carte" aria-label="Modifier">
                                <span class="geo_brush_icon" aria-hidden="true"></span>
                            </a>
                        </li>
                        <li class="geo_card_item">
                            <a href="" class="geo_card_link" title="Copier la carte" aria-label="Copier">
                                <span class="geo_copy_file_icon" aria-hidden="true"></span>
                            </a>
                        </li>
                        <li class="geo_card_item">
                            <a href="" class="geo_card_link" title="Supprimer la carte" aria-label="Supprimer">
                                <span class="geo_trash_icon" aria-hidden="true"></span>
                            </a>
                        </li>
                        <li class="geo_card_item">
                            <a href="" class="geo_card_link" title="Plus d'options" aria-label="Plus">
                                <span class="geo_more_icon" aria-hidden="true"></span>
                            </a>
                        </li> 
                    </ul>
                </div>
            </div>
        `;
    }
}

customElements.define('card-map', Card);