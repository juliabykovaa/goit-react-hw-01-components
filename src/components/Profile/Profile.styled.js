import styled from '@emotion/styled'

export const ProfileCard = styled.div`
margin: 100px;
display: flex;
align-items: stretch;
flex-direction: column;
width: fit-content;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin: 0 auto;
    margin-top: 100px;
p {
    margin: 0;
}
`

export const Description = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
    padding-bottom: 0;
    img {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        width: 150px;
        height: 150px;
        border-radius: 100px;
    }
    `

export const Statistics = styled.ul`
background-color: rgb(239, 239, 240);
display: flex;
justify-content: space-around;
gap: 15px;
padding: 10px;
margin: 0;
margin-top: 20px;

li {
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
}`

export const UserName = styled.p`
    font-size: 35px;
    font-weight: 600;
    `

export const Location = styled.p`
color: rgb(151, 151, 151);
`

export const Tag = styled.p`
color: rgb(151, 151, 151);
`