class StepsList extends HTMLElement {
    constructor() {
        super();
    }
    set meal(meal) {
        this._meal = meal;
        this.render();
    }
    render() {
        const instructions = this._meal.strInstructions.split("\r\n");
        
        const heading = document.createElement("h3");
        heading.innerText = "Instructions :";
        const instructionsList = document.createElement("ol");

        instructions.forEach(instruction => {
            const instructionItem = document.createElement("li");
            instructionItem.innerText = instruction;

            instructionsList.appendChild(instructionItem);
        });

        this.append(heading, instructionsList);
    }
}

customElements.define("instructions-list", StepsList);