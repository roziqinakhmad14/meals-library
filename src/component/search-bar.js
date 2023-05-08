class SearchBar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
    }
    set search(search) {
        this._search = search;
    }
    get value() {
        return this.querySelector("#search-input").value;
    }
    render() {
        this.innerHTML = `
        <style>
            #search-input {
                font-size: 18px;
                width: 680px;
                padding: 12px;
                border-radius: 10px 0 0 10px;
                border: none;
            }
            #search-input:focus {
                outline: none;
            }
            #search-btn {
                font-size: 18px;
                cursor: pointer;
                background-color: #1B1A17;
                color: white;
                padding: 12px 13px;
                border: none;
                border-radius: 0 10px 10px 0;
            }
            #search-btn:hover {
                background-color: #000;
            }
        </style>
        
        <form>
            <input type="text" name="search-input" id="search-input" placeholder="Search...">
            <button type="submit" id="search-btn"><i class="fa fa-search"></i></button>
        </form>
        `;

        this.querySelector("form").addEventListener("submit", event => {
            event.preventDefault();
            this._search(this.querySelector("#search-input").value);
        });
    }
}

customElements.define("search-bar", SearchBar);