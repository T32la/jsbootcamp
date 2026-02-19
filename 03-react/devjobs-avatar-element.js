class DevJobsAvatar extends HTMLElement {
  // https://unavatar.io/#/
  constructor() {
    super(); // llamar al constructor de HTMLElement

    // attachShadow: open. Los estilos definidos (internos) no van a afectar a las images del template. Una burbuja para la imagen
    this.attachShadow({ mode: "open" });
  }

  createUrl(service, username) {
    return `https://unavatar.io/${service}/${username}`;
  }

  render() {
    const service = this.getAttribute("service") ?? "github";
    const username = this.getAttribute("username") ?? "T32la";
    const size = this.getAttribute("size") ?? "40";

    const url = this.createUrl(service, username);

    console.log({ service, username, size });

    this.shadowRoot.innerHTML = `
      <style>
        img {
        // border: 10px solid red; 
        width: ${size}px;
        height: ${size}px;
        border-radius: 9999px;
        }
      </style>
        <img 
          src="${url}"
          alt="Avatar de ${username}"
          class="avatar"
          />
      `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("devjobs-avatar", DevJobsAvatar);
