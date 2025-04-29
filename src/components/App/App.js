import { html, LitElement } from "lit";
import './App.less';

export class App extends LitElement {
    createRenderRoot() {
        return this; //Allow the outside styles affect the component
    }

    render(){
        return html `  
        `
    }
}

customElements.define('app-root', App);