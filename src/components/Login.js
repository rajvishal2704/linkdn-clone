import styled from 'styled-components'
import {connect} from 'react-redux'
import {signInAPI} from '../actions' 
import { Redirect } from 'react-router'

const Login = (props) => {
    return (
        <Container>
            {
                props.user && <Redirect to="/home" />
            }
            <Nav>
                <a href="/">
                    <img src="/images/login-logo.svg" alt="" />
                </a>
                <div>
                    <Join>Join now</Join>
                    <SignIn>Sign in</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to your professional community</h1>
                    <img src="/images/login-hero.svg" />
                </Hero>
                <Form>
                    <Google onClick={() => props.signIn()}>
                        <img src="/images/google.svg" />
                        Sign in with google
                    </Google>
                </Form>
            </Section>
        </Container>
    )
}

const Container = styled.div `
    padding: 0px;
`
const Nav = styled.nav `
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

    & > a {
        width: 135px;
        height:35px;
        @media(max-width: 768px) {
            padding: 0 5px;
        }
    }
`
const Join = styled.a `
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    border-radius: 4px;
    color: #A9A9A9;
    margin-right: 12px;
    &:hover {
        background-color: #D3D3D3;
        color: #000000;
        text-decoration: none;
    }
`
const SignIn = styled.a `
    box-shadow: inset 0 0 0 1px #0A66C2;
    color: #0A66C2;
    border-radius: 24px;
    transition-duration: 167ms;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    background-color: #FFFFFF;
    &:hover {
        background-color: #EAF5F9;
        color: #0A66C2;
        text-decoration: none;
    }
`
const Section = styled.section `
    display: flex;
    align-content: start;
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto;
    @media (max-width: 768px) {
        margin: auto;
        min-height: 0px;
    }
`
const Hero = styled.div `
    width: 100%auto;
    h1 {
        padding-bottom: 0;
        width: 58%;
        font-size: 56px;
        color: #2977C9;
        font-weight: 200;
        line-height: 70px;
        @media (max-width: 768px) {
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }
    img {
        /* z-index: -1; */
        width: 700px;
        height: 670px;
        position: absolute;
        bottom: -2px;
        right: -150px;
        @media (max-width: 768px) {
            top:250px;
            width: initial;
            position: initial;
            height: initial;
        }
    }
`
const Form = styled.div `
    margin-top: 100px;
    width: 410px;
    @media (max-width: 768px) {
        margin-top: 20px;
    }
`
const Google = styled.button `
    display: flex;
    justify-content:center;
    background-color: #FFFFFF;
    align-items:center;
    height: 56px;
    width: 100%;
    border-radius: 28px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
    vertical-align: middle;
    z-index: 0;
    transition-duration: 167ms;
    font-size: 20px;
    &:hover {
        background-color: rgba(207, 207, 207, 0.25);
        cursor: pointer;
        color: rgb(0 0 0 / 0.75);
    }
`
const mapStateToProps = (state) => {
    return {user: state.userState.user,};
};
const mapDispatchToProps = (dispatch) => ({
    signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
