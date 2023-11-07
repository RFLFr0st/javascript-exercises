function getAdmins(map){
    let admins = []
    for([key, vlaue] of map){
        if(value == 'Admin')
        admins.push(key)
    }
    return admins;
}
const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Rafael', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Pedro', 'Admin');

console.log(getAdmins(usuarios));