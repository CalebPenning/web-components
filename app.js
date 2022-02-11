const template = document.createElement('template')
template.innerHTML = `
    <style>
        .user-card {
            font-family: 'Arial', sans-serif;
            background: #f4f4f4;
            width: 200px;
            height: 200px; 
            margin-bottom: 15px;
            border-bottom: darkorchid 5px solid;
            display: flex;
            justify-content: center;
        }

        .user-card img {
            width: 80px;
            height: 80px;
        }

        .user-card button {
            cursor: pointer;
            background: darkorchid;
            color: #fff;
            border: 0;
            border-radius: 5px;
            padding: 5px 10px;
        }
    </style>
    <section class="user-card">
            <img />
        <div>
            <h3>
                
            </h3>
            <article class="info">
                <p><slot name="email" /></p>
                <p><slot name="phone" /></p>
            </article>
            <button id="toggle-info">Hide Info</button>
        </div>
    </section>
`

class UserCard extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({ mode: 'open' })

        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name')

        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar')
    }
}

window.customElements.define('user-card', UserCard)