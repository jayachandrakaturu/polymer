import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-slider/paper-slider.js';

class AppElements extends PolymerElement {
    static get template () {
      return html`
      <style>
      paper-checkbox {
        --paper-checkbox-checked-ink-color: #FFFFFF;
        --paper-checkbox-unchecked-ink-color: #FFFFFF;
      }
      paper-slider.red {
        --paper-slider-knob-color: var(--paper-red-500);
        --paper-slider-active-color: var(--paper-red-500);
      }
      paper-slider.green {
        --paper-slider-knob-color: var(--paper-green-500);
        --paper-slider-active-color: var(--paper-green-500);
      }
      paper-slider.blue {
        --paper-slider-knob-color: var(--paper-light-blue-500);
        --paper-slider-active-color: var(--paper-light-blue-500);
      }
    </style>
  
    <h1>Start Polymer 3.0</h1>
    <p>[[message]]</p>
    <paper-slider
      value="183"
      max="255"
      secondary-progress="200"
      editable>
  </paper-slider>
  <paper-slider value="21"></paper-slider>
  <paper-slider value="0"></paper-slider>
  <paper-slider value="50" secondary-progress="85"></paper-slider>
  <paper-slider disabled value="33"></paper-slider>
  <div>R</div>
  <paper-slider class="red" value="23" max="255" editable></paper-slider>
  <div>G</div>
  <paper-slider class="green" value="183" max="255" editable></paper-slider>
  <div>B</div>
  <paper-slider class="blue" value="211" max="255" editable></paper-slider>
  <style is="custom-style">
  .caption {
  padding-left: 12px;
  color: #a0a0a0;
  }
  #grade {
  --paper-slider-secondary-color: var(--paper-red-a200);
  }
  </style>
  <div>Brightness</div><br>
  <paper-slider pin value="20"></paper-slider>
  <div>Ratings: <span id="ratingsLabel" class="caption"></span></div><br>
  <paper-slider id="ratings" pin snaps max="10" max-markers="10" step="1" value="5"></paper-slider>
  <div>Grade: <span id="gradeLabel" class="caption"></span></div><br>
  <paper-slider id="grade" pin value="20" secondary-progress="70"></paper-slider>
      `;
    }
  }
  customElements.define('app-element', AppElements);
  