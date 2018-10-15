import  React  from  'react';

const  DisplayEmployee = ({ user,select }) => {
    return (
        <div  className="DisplayEmployee">
            <img  src={user.picture.large}  alt="picture"  />
            <ul>
                <li>Gender : {user.gender}</li>
                <li>
                    Name : {user.name.title}  {user.name.last}{' '}
                    {user.name.first}
                </li>
                <li>E-mail : {user.email}</li>
                <li>
                    Location : {user.location.street},
                    {user.location.postcode}{' '}{user.location.city}
                </li>
                <li>Phone:{user.phone}</li>
                <li>age:{user.registered.age}</li>
            </ul>
            <button onClick={select}>Selectionner</button>
        </div>
    );
};

export  default  DisplayEmployee;