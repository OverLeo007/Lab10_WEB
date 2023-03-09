print = console.log

const form = document.getElementById('myForm');

let inputs = [];

for (let i = 0; i < form.elements.length; i++) {
    let cur_elem = form.elements[i];
    if (cur_elem.name !== 'name') {
        cur_elem.disabled = true;
    }
    print(cur_elem.tagName)
    inputs.push(cur_elem)
}
print(inputs)

for (let i = 0; i < inputs.length - 1; i++) {
    inputs[i].addEventListener('input', (ev) => {
        if (ev.target.checkValidity()) {
            inputs[i + 1].disabled = false;
            ev.target.classList.remove("is-invalid")
            ev.target.classList.add("is-valid")
        } else {
            ev.target.classList.add("is-invalid")
        }
    })
}

form.addEventListener('submit', (event) => {
    event.preventDefault(); // предотвратить отправку формы на сервер
    let new_client = {};
    // получить данные формы
    const formData = new FormData(event.target);
    for (let [key, value] of formData.entries()) {
        print(key, value)
        // const element = document.getElementById('key');
        new_client[key] = value;
    }

    print(new_client);
});
