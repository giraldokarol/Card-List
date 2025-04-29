import { html, LitElement } from "lit";
import './App.less';

export class App extends LitElement {
    createRenderRoot() {
        return this; //Allow the outside styles affect the component
    }

    render(){
        return html `
            <header>
                <div class="geo_nav_menu">
                    <div class="geo_nav_menu_tabs">
                        <a class="geo_nav_menu_tabs_item" title="Homepage">
                            <span class="geo_home_icon"></span>
                        </a>
                    </div>
                </div>
            </header>    
        `
    }
}

customElements.define('app-root', App);