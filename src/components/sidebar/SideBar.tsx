import React from 'react';
import { Container,ButtonArea,ButtonGroup,
    GithubBtn,
    EmailBtn,
    LinkedinBtn,
    MyLink,
    IgBtn,
    TwitterBtn
 } from './SideBarElements';

export const SideBar: React.FC = () => {
    const helperFunction = (url:string) =>{
        window.open(url);
    }
    const helperFunctionEmail = () => {
        window.location.href = "mailto:douglas821209@gmail.com";
    }
    return ( <>
        <Container>
            <ButtonArea>
                <ButtonGroup>
                <MyLink href="https://www.yahoo.com">
                    <GithubBtn size={40}/>
                </MyLink>
                <MyLink href="https://www.linkedin.com/in/douglas-hwang"> 
                <LinkedinBtn size={40} />
                </MyLink>
                
                <MyLink href="https://www.instagram.com/douglashuang82">
                    <IgBtn size={40}></IgBtn>
                </MyLink>
                
                <MyLink href="https://www.instagram.com/douglashuang82">
                    <TwitterBtn size={40}></TwitterBtn>
                </MyLink>
                <MyLink href="mailto:douglas821209@gmail.com">
                    <EmailBtn size={40}/>
                </MyLink>
                
                </ButtonGroup>
            </ButtonArea>
        </Container>
    </>);
}