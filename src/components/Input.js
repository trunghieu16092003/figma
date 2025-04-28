class CustomInput extends HTMLElement {
    connectedCallback() {
        const type = this.getAttribute('type') || 'text';
        const label = this.getAttribute('label');
        const name = this.getAttribute('name');
        this.innerHTML = `
            <div class="mb-4">
              <label for="${name}" class="block text-sm font-medium text-gray-700 mb-2">${label}</label>
              <input id="${name}" type="${type}" name="${name}" class="form-input border px-3 py-2 rounded w-full" />
            </div>
        `;
    }
}
customElements.define('custom-input', CustomInput);
