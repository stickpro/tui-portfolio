import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`

   _____  __   _        __  
  / ___/ / /_ (_)_____ / /__
  \\__ \\ / __// // ___// //_/
 ___/ // /_ / // /__ / ,<   
/____/ \\__//_/ \\___//_/|_|  
                            

`}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
          {`

   _____  __   _        __  
  / ___/ / /_ (_)_____ / /__
  \\__ \\ / __// // ___// //_/
 ___/ // /_ / // /__ / ,<   
/____/ \\__//_/ \\___//_/|_|  
                            

`}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
        <Seperator>----</Seperator>
        <div>
          This project's using terminal UI you can watch GUI versiom my site on{" "}
          <Link href="https://stick-design.ru">
            stick-design.ru
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                                            ░░                                  
                                       ▒▒░   ░▓▓                                
                                      ▓█████▓██▓▒                               
                                 ░  ▒█▓▓█▓▓█████████                            
                                 ░ ▒▓██ ▒██████████░█                           
                                ▒▒███░███▓▒▒▒▒▒▒▒▓███▒                          
                              ▒█░██▓███▓▒▒▒▒▒░▒▒░▒▒▓██▒                         
                            ░▒██▒█▒▓██▓▓▓▓▓▒▒▒▓▓▓▓▒▒▒██                         
                           ▒░▓██▓▓███▓▒░           ░███                         
                          ▒▓▒███▓▒██▓               ███                         
                          ▓▓░███▒██▓                ███                         
                          ▓█░▓██▓█▓       ░▒▓▓▒░▒▓░███                          
                        █░▓███████▓        ░    ▒ ░███                          
                       ▓▒▒███▒█▒██▓               ███                           
                         ░▒████▒███▒             ███                            
                      ▒   ░████████▓     ░░░▒▒░  ██                             
                      ▓▓    ████████▓▓░░▒▒░ ▒▒▒▒██                              
                 ▒▓▓▓ █▓ ▒ ▓████████████▓░  ░ ▓██                               
               ▓▓▓██▓██ ▒ ██▒█ ██████████▓▒▓▒▒██▓ ▒                             
               ▒▓███▓▒▓▓████████░████████████████░  ▒░                          
                ▓████▓░░░█▓▒███▓░▒██████████████░▓ ███▓▓░                       
          ▓█ ▒▒▒░▓████▓▒▒██▓▒████▓▒████████████▒█████ ░ ▒                       
         ▓▓██ ▒▓▓░▓████▒▒▒▓▒░▓▓█▓▓▓▒██████████▓██████▓ ░░░▓▓                    
         ▓▓▓███▒▒ ▓████▓░░▒▒ ░█▓█▓▓▓██████████▒████▓█▓ ▒▒▒█▒▓                   
         ▒░▓████▒█▒▓█████▓▓▓▓▓▓██▓████████████░▒███▓██ ░▒░▒█▓                   
        ░▒▓▓▓██▒▒▓▓█████▓▓▒▓▓▓▓███████████████▒▒████▓█▓ ░░▓▓█▒                  
        ▒▓▓▓▓▓█▓█▓▓█████▓▓▓▓▓▓▓███████████████▓░▓██████░▓▒██▒█                  
        ▒▓▓▓████▓▒██████▓▒▓▓▒▒▓▓██▓███████████▓▓▓██░ ▒██░▒██▒▓▓                 
       ░▒▓██████▓████████▓▓▓▓▒▓▓█▓█████████████▒▓▓█▓ ░▒▓░  ▓▓▓▒▓                
          ░  ▒░░▓▒██████▒▒▒▓░░▓▒▓▒▓▒███████████▓▓█████▓▒░  ▓▓█████              
     ░▒▓███████▒░ ░▓████▓▓▓▒▒▒░▒█▒█▒▓███████       ██   ███████▒▓               
      ▒▓██████████▓██████▓▒▒▒▓▒▒██▓█ ███▓░     ▒   ▒░   ░░▒██▓  █▓              
      ▒███████████████████▓▓▓▓▓▓▓█  ▒▒▓░░▓              ▒▓▒░▒▒░███              
       ░▒▓▓████▓▓█████████▓██▒ ▓█▓▓█▒██████      ░▓▓▓█▒░░░▒█▓░▓▓  ▓             
     ▒▓▓▓▒▒████████░░░▓ ▒░▒▒▒▓█▒██▓▓▓███████       ▒▒████▒░░░ ██▓▒███           
       ░▓███████▓▓▓██▒█▓▒▒████▒█▓████████████▒▒▒▒░▒▓██▒     ░█████████          
    ░ ▓█████████▒███▓███▒▓████▓▓█████▓████████▓▒▓████████▓████▒▒██████          
     ▓█░███████▓████████▒▓█████▒█▓▓██▓▓▓█████████████████████▓▓▒▒██▓█           
`}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
