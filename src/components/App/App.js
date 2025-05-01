import { html, LitElement } from "lit";
import './App.less';
//New Components
import { MenuLinks } from "../MenuLinks/MenuLinks";
//Images
import profilImage from '../../images/avatar.png';

export class App extends LitElement {
    static properties = {
        isOpen:{type:Boolean}
    }

    constructor(){
        super();
        this.isOpen = false;
    }

    toggleMenuMobile() {
        if(document.body.classList.contains('menumobile')){
            document.body.classList.remove('menumobile');
            this.isOpen = false;
        }else {
            document.body.classList.add('menumobile');
            this.isOpen = true;
        }

        this.dispatchEvent(new CustomEvent('menu-toggle', {
            detail: { open: this.isOpen },
            bubbles: true,
            composed: true
        }));
    }

    createRenderRoot() {
        return this; //Allow the outside styles affect the component
    }

    render(){
        return html `
            <header class="geo_header" role="banner">
                <div class="geo_nav_menu">
                    <div class="geo_nav_menu_tabs">
                        <a class="geo_nav_menu_tabs_item" title="Homepage" href="#">
                            <span class="geo_home_icon" aria-hidden="true"></span>
                        </a>
                    </div>

                    <nav role="navigation" aria-label="Principal Menu" class="geo_nav_menu_links">
                        <button type="button" aria-expanded="false" class="geo_burger_btn" @click="${this.toggleMenuMobile}">
                            <span class="geo_burger_btn_container" aria-hidden="true">
                                <span class="geo_burger_btn_lines"></span>
                            </span>
                        </button>
                        <div class="geo_nav_menu_links_container">
                            <ul class="geo_nav_menu_items">
                                <li>
                                    <menu-link title="Go to favorites page" iconClass="geo_star_icon" text="Favorites"></menu-link>
                                    <menu-link title="Go to setting page" iconClass="geo_settings_icon" text="Configuration"></menu-link>
                                    <menu-link title="Go to help page" iconClass="geo_suppport_icon" text="Help Page"></menu-link>
                                    <menu-link title="Go to see your messages" iconClass="geo_mail_icon" notification="4" text="Messages"></menu-link>
                                    <menu-link title="Go to notifications page" iconClass="geo_notification_icon" .separator="${false}" text="Notification"></menu-link>
                                </li>
                            </ul>
                            <div class="geo_authen_container">
                                ${this.isOpen
                                    ? html`
                                        <img src="${profilImage}" alt="Profil Photo" width="40" height="40"/>
                                        <a href="#" title="Sign Out" class="geo_authen_container_link">Sign out</a>`
                                    : html`
                                        <a href="#" title="Show Profil Options">
                                            <img src="${profilImage}" alt="Profil Photo" width="40" height="40"/>
                                        </a>`
                                }
                            </div>
                        </div>
                    </nav> 
                </div>


            </header>    
        `
    }
}

customElements.define('app-root', App);