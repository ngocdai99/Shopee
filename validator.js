
function Validator(options) {
    var formElement = document.querySelector(options.form);
    function getParent(inputElement, selector) {
        while (inputElement.parentElement) {
            if (inputElement.parentElement.matches(selector)) {
                return inputElement.parentElement
            }
            inputElement = inputElement.parentElement
        }
    }

    function handleValidate(inputElement, rule) {
        var parentElement = getParent(inputElement, '.form-group')
        var errorElement = parentElement.querySelector('.form-message')
        var errorMessage;
        switch (inputElement.type) {
            case 'radio': {
                var checkedRadio = formElement.querySelector(`[name="${inputElement.name}"]:checked`)
                if (checkedRadio) {
                    errorMessage = ''
                } else {
                    errorMessage = 'Vui lòng nhập trường này'
                }
                break;
            }

            default: {
                errorMessage = rule.test(inputElement.value)
                break;
            }
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage
            parentElement.classList.add('invalid')
        }
        return !errorMessage;

    }
    if (formElement) {
        var result;
        options.rules.forEach((rule) => {
            var inputElement = formElement.querySelector(rule.selector)
            if (inputElement) {
                var parentElement = getParent(inputElement, '.form-group')
                var errorElement = parentElement.querySelector('.form-message')

                inputElement.onblur = () => {
                    handleValidate(inputElement, rule)
                }

                inputElement.oninput = () => {
                    errorElement.innerText = ''
                    parentElement.classList.remove('invalid')
                }
            }
        })
        formElement.onsubmit = (event) => {

            event.preventDefault();
            var isValid = true;
            options.rules.forEach((rule) => {
                var inputElement = formElement.querySelector(rule.selector)
                if (!handleValidate(inputElement, rule)) {
                    isValid = false
                }
            })
            if (isValid) {
                if (typeof this.onSubmit === 'function') {
                    var inputs = formElement.querySelectorAll('[name]')
                    var formData = Array.from(inputs).reduce((acc, input) => {
                        switch (input.type) {
                            case 'radio': {
                                var checkedRadio = formElement.querySelector(`[name="${input.name}"]:checked`)
                                acc[input.name] = checkedRadio.value
                                break;
                            }
                            case 'checkbox': {
                                var checkedCheckboxs = formElement.querySelectorAll(`[name="${input.name}"]:checked`)
                                acc[input.name] = Array.from(checkedCheckboxs).reduce((acc, checkbox) => {
                                    acc.push(checkbox.value)
                                    return acc;
                                }, [])
                                break;
                            }
                            case 'file': {
                                acc[input.name] = input.files;
                                break;
                            }
                            default: {
                                acc[input.name] = input.value;
                                break;
                            }
                        }
                        return acc;
                    }, {})
                    this.onSubmit(formData);
                } else {
                    formElement.submit();
                }

            }
            return result;
        }
    }
}

// Hàm test return undefined nếu điều kiện được thỏa mãn
// ngược lại: return message lỗi
isRequired = (selector) => {
    return {
        selector,
        test(value) {
            return value ? undefined : 'Vui lòng nhập trường này'
        }
    }

}


isPhoneNumber = (selector) => {
    return {
        selector,
        test(value) {
            if (value === '') {
                return 'Vui lòng nhập trường này'
            }
            const regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
            return value.match(regex) ? undefined : 'Trường này phải là số điện thoại'
        }
    }
}

minLength = (selector, min) => {
    return {
        selector,
        test(value) {
            if (value === '') {
                return 'Vui lòng nhập trường này'
            }
            return value.length >= min ? undefined : `Mật khẩu ít nhất ${min} ký tự`
        }
    }
}

confirmed = (selector, getConfirmValue) => {
    return {
        selector,
        test(value) {
            if (value === '') {
                return 'Vui lòng nhập trường này'
            }
            return value === getConfirmValue() ? undefined : 'Giá trị nhập vào không chính xác'
        }
    }
}