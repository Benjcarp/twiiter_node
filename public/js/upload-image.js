window.addEventListener('DOMContentLoaded', () => {
    const imageProfile = document.getElementById('profile-image');
    const inputAvatar = document.getElementById('avatar');
    const formContainer = document.getElementById('form-container');

    imageProfile.addEventListener('click', (e) => {
        inputAvatar.click();
    })

    inputAvatar.addEventListener('change', () => {
        formContainer.submit();
    })
})