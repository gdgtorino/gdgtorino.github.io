var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, LitElement, property, html } from '@polymer/lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { ironFlexLayout } from '../styles/iron-flex-layout';
import '@polymer/iron-icons/iron-icons';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/paper-input/paper-input';
import '../styles/theme';
let GdgApp = class GdgApp extends LitElement {
    constructor() {
        super();
        this.countdown = [
            {
                displayName: 'Giorni',
                value: 0,
            },
            {
                displayName: 'Ore',
                value: 0,
            },
            {
                displayName: 'Minuti',
                value: 0,
            },
            {
                displayName: 'Secondi',
                value: 0,
            },
        ];
        this.deadline = new Date('2019-01-01T00:00:00');
        countdown(this.deadline, ts => {
            this.countdown[0].value = ts.days;
            this.countdown[1].value = ts.hours;
            this.countdown[2].value = ts.minutes;
            this.countdown[3].value = ts.seconds;
            this.requestUpdate();
        }, countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);
    }
    render() {
        return html `
            ${ironFlexLayout}
            
            <style>
              :host {
                display: block;
                width: 100vw;
                height: 100vh;
                color: rgba(0, 0, 0, 0.5);
                font-family: 'Montserrat', sans-serif;
              }
              
              .logo {
                height: 100px;
                width: auto;
              }
              
              .h100 {
                height: 100%;
              }
              
              .mw700 {
                max-width: 700px;
              }
              
              h2 {
                margin-bottom: 0;
                font-weight: 500;
              }
              
              .digits {
                font-size: 60px;
                width: 80px;
                text-align: center;
              }
              
              .emailInput {
                width: 300px;
              }
              
              .countdown-component {
                margin: 0 18px;
              }
              
              .hidden {
                display: none;
              }
              
              .countdown {
                margin-bottom: 80px;
              }
              
              .container {
                padding: 0 16px;
                min-height: fit-content;
              }
              
              @media (max-width: 500px) {
                .logo {
                  height: 80px;
                }
              
                h2 {
                  font-size: 20px;
                }
                
                .digits {
                  font-size: 35px;
                  width: 50px;
                }
                
                .caption {
                  font-size: 12px;
                }
              }
            </style>
            
            <div class="vertical layout center h100 container">
              <div class="flex"></div>
              <div class="mw700 vertical layout start">
                <img src="../../assets/images/logo.png" class="logo">
                <h2>Stiamo realizzando una nuova Progressive Web App che rilasceremo all'inizio del nuovo anno.
                Nel frattempo resta aggiornato iscrivendoti alla nostra newsletter!</h2>
                <paper-input id="emailInput"
                             label="Email"
                             type="email"
                             required
                             auto-validate
                             error-message="Inserisci un indirizzo mail valido"
                             @keypress="${this.onEmailInputKeypress.bind(this)}">
                  <paper-icon-button slot="suffix"
                                     icon="arrow-forward"
                                     title="Iscriviti"
                                     @click="${this.subscribe.bind(this)}">
                  </paper-icon-button>
                </paper-input>
              </div>
              <div class="flex"></div>
              <div class="countdown horizontal layout self-center">
                ${repeat(this.countdown, component => html `
                  <div class="vertical layout center countdown-component">
                    <div class="digits">${component.value.toString().padStart(2, '0')}</div>
                    <div class="caption">${component.displayName}</div>
                  </div>
                `)}
              </div>
            </div>
            
            <form id="mailChimpForm"
                  class="hidden"
                  action="https://gdgtorino.us13.list-manage.com/subscribe/post?u=5b856731f80e3cf563201f842&amp;id=a4a45eebb0"
                  method="POST"
                  target="_blank">
              <input type="hidden" name="EMAIL">
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_5b856731f80e3cf563201f842_a4a45eebb0" tabindex="-1" value=""></div>
            </form>
        `;
    }
    firstUpdated() {
        this.emailInput = this.shadowRoot.querySelector('#emailInput');
        this.mailChimpForm = this.shadowRoot.querySelector('#mailChimpForm');
    }
    onEmailInputKeypress(event) {
        if (event.key === 'Enter') {
            this.subscribe();
        }
    }
    subscribe() {
        if (this.emailInput && this.emailInput.validate()) {
            this.mailChimpForm.querySelector('input').value = this.emailInput.value;
            this.mailChimpForm.submit();
        }
    }
};
__decorate([
    property()
], GdgApp.prototype, "countdown", void 0);
GdgApp = __decorate([
    customElement('gdg-app')
], GdgApp);
//# sourceMappingURL=gdg-app.js.map