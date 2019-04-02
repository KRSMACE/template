const uid = location.search.split('=')[1];
const db = firebase.database();
const ref = db.ref('users').child(uid);

// Firebase event, any change to dtatbase
ref.on('value', updateUserser);

const profileDisplayName = document.getElementById('profile-display-name');
function userUpdate(snapshot) {
    const user = snapshot.val();
    profileDisplayName.textContent = user.displayName;

}