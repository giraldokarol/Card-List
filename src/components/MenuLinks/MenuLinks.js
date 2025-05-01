import { html, LitElement } from "lit";
import { when } from 'lit/directives/when.js';
import './MenuLinks.less';

export class MenuLinks extends LitElement {
    static properties = {
        title: {type: String},
        url: {type: String},
        iconClass: {type: String},
        notification: {type: Number},
        text:{type:String},
        separator:{type:Boolean},
        menuOpen: {type:Boolean}
    }

    constructor(){
        super(); //Call LitElement constructor
        this.title = "Menu Link";
        this.url = "#";
        this.iconClass = "geo_home_icon";
        this.notification = 0;
        this.text = "Item Menu";
        this.separator = true;
        this.menuOpen = false;
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('menu-toggle', this.handleMenuToggle);
    }

    
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('menu-toggle', this.handleMenuToggle);
    }

    handleMenuToggle = (e) => {
        this.menuOpen = e.detail.open; //Now, the property menuOpen is connected with the const isOpen
    };


    createRenderRoot() {
        return this; //Allow the outside styles affect the component
    }

    render(){
        return html `
            <a href="${this.url}" title="${this.title}"  class="${this.separator ? 'geo_menu_action separator' : 'geo_menu_action'}">
                <span aria-hidden="true" class="${this.iconClass}"></span>
                ${when(
                    this.notification !== 0,
                    () => html`<span class="geo_menu_action_notif">${this.notification}</span>`
                )}
                ${when(
                    this.menuOpen,
                    () => html`<span class="geo_menu_action_text">${this.text}</span>`
                )}
            </a>
        `
    }
}

customElements.define('menu-link', MenuLinks);