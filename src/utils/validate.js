

export const checkValidData = (email,password,name) =>{
      const emailId=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
      const passwordId= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
      const nameId=/^[A-Za-zÀ-ÖØ-ÿ]+([ '-][A-Za-zÀ-ÖØ-ÿ]+)*$/.test(name);  

      if(!emailId) return "Invalid email Id";
      if(!passwordId) return "Invalid password";
      if(!nameId) return "Invalid Name";  
      
      return null;

};