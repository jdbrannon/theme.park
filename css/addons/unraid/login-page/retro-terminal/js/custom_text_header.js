
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                     __                             ___       __  
    ____                                   
   / __ )_________ _____  ____  ____  ____ 
  / __  / ___/ __ `/ __ \\/ __ \\/ __ \\/ __ \\
 / /_/ / /  / /_/ / / / / / / / /_/ / / / /
/_____/_/   \\__,_/_/ /_/_/ /_/\\____/_/ /
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
