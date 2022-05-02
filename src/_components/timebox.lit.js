import "lit/experimental-hydrate-support.js"
import { LitElement, html, css } from "lit"

export class TimeBoxLit extends LitElement {
  static properties = {
    currentTime: { type: String },
    isHydrated: { type: Boolean }
  }

  static styles = css`
    :host {
      display: block;
      background: moccasin;
      border: 4px solid black;
      padding: 1rem;
      box-shadow: 0px 4px 8px #bbb;
    }
  `

  constructor() {
    super()

    this.currentTime = this.getTime()
  }

  getTime() {
    const date = new Date()
    const options = {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      timeZone: 'America/Los_Angeles'
    }
    return new Intl.DateTimeFormat('en-US', options).format(date)
  }

  firstUpdated() {
    this.isHydrated = true
    this.currentTime = ` ${this.getTime()} ` // not sure why extra spaces are needed on hydration
  }

  render() {
    return html`
      The time this box was rendered:<br/><br/>
      <strong>${this.currentTime}</strong><br/><br/>
      ${this.isHydrated ? "Rendered by Lit (Client-Side)" : "Rendered by Lit (SSG)"}
    `;
  }
}

customElements.define('time-box-lit', TimeBoxLit)