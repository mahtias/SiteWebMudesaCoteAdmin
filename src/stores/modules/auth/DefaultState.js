const defaultstate = {
    isLoggedIn: !!localStorage.getItem('token'),
     user: localStorage.getItem('user'),

    champVide: false,
    loader: false,
    error: false,
    errorMessage: undefined,
    utilisateurs:[],
   
    roles:[],
    userRole:[],
    users:[],
    messages:[],
    fichierJoints:[]
    



};

 export default defaultstate