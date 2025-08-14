const express = require(`express`);
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
    {id: 1, lastName: `Mustapha`, firstName:`Ken Ford`, section:`BSIT4A`, status:`p`},
    {id: 1, lastName: `Mustapha`, firstName:`Ken Ford`, section:`BSIT4A`, status:`a`},
];

app.get(`/users`, (req, res)=>{

const {lastName, firstName, section, status} = req.body;

const userIndex = users.findIndex(user=> user.lastName === lastName && user.firstName === firstName);

if(userIndex !== -1){

user[userIndex].status = status;
console.log(`Updated attendance for ${lastName} ${firstName} tp: ${status}`);
res.status(200).json({ message: `Attendance for ${lastName} ${firstName} has been updated to ${status}.`});

}else{


    
};

const newUser = {
    id: users.length + 1,
    lastName,
    firstName,
    section,
    status,
};



users.push(newUser);
console.log(`New user added: ${lastName} ${firstName} with status: ${status}`);

res.status(201).json({message: `New student ${lastName} ${firstName} has been added with status ${status}`});

});


app.get(`/users`, (req, res)=>{
    res.status(200).json(users); 

    
app.get(`/users`, (req, res)=>{
    res.send(`Server is running!`)
});


app.listen(PORT, () =>{
    res.send(`Server is running at https://localhost:${PORT}`);
});


});