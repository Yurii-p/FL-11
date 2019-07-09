let email = prompt('Please enter your email:', '')
let magicNumber6 = 6
let magicNumber5 = 5
if (email === '' || email === null) {
    alert('Canceled')
} else if (email.length < magicNumber6) {
    alert('I don\'t know any emails having name length less than 6 symbols')
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    let pass = prompt('Please enter your password:')
    if (pass === '' || pass === null) {
        alert('Canceled')
    } else if (email === 'user@gmail.com' && pass === 'UserPass' ||
        email === 'admin@gmail.com' && pass === 'AdminPass') {
        let changePass = confirm('Do you want to change the password?')
        if (changePass === false) {
            alert('You have failed the change.')
        } else {
            let oldPass = prompt('Enter your old password')
            if (oldPass === pass) {
                pass = prompt('Enter new password:')
                if (pass.length < magicNumber5) {
                    alert('It’s too short password. Sorry.')
                } else {
                    let newPass = prompt('Enter again:')
                    if (newPass !== pass) {
                        alert('You wrote the wrong password.')
                    } else {
                        alert('You have successfully changed your password.')
                    }
                }
            } else {
                alert('Wrond password')
            }
        }
    } else {
        alert('Wrond password')
    }

} else {
    alert('I don\'t know you!')
}