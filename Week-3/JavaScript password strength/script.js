function isStrongPassword(pwd){
    if(pwd.length > 8 && pwd!="password" && (pwd).match(/^(?=.*[A-Z])(?=.*\d).*$/) )
    {
        console.log("true");
    }

  if(pwd.length < 8)
  {
      console.log("false - Too Short");
  }
  else if (pwd.includes("password"))
  {
      console.log("false - Contains password");
  }
  else if (!(pwd).match(/^(?=.*[A-Z])(?=.*\d).*$/))
  {
      console.log("false - Contains password");
  }
}

//isStrongPassword("Varalakshmi2345");
//isStrongPassword("varalakshmi2345");
isStrongPassword("Qwerty");
isStrongPassword("passwordQwerty");
isStrongPassword("qwerty123");
isStrongPassword("Qwerty123");