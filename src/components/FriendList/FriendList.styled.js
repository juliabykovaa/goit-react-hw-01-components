import styled from '@emotion/styled'

export const FriendGallery = styled.ul`
display: flex;
flex-direction: column;
margin: 0 auto;
align-items: center;
gap: 20px;
margin-top: 100px;
padding: 0;

`
export const FriendProfile = styled.li`
position: relative;
display: flex;
list-style: none;
flex-direction: row;
gap: 15px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
align-items: center;
padding: 20px;
padding-left: 30px;
width: 350px`


export const FriendfImg = styled.img`
 box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
width: 100px;
height: 100px;
border-radius: 25px;`

export const FriendName = styled.p`
font-size: 24px;
font-weight: 600`

export const Chip = styled.span`
position: absolute;
top: 50%;
left: 5px;
svg {
    fill: ${props => {
    switch (props.isOnline) {
        case true:
            return 'green';
        case false:
            return 'red';
        default:
            return 'yellow';
        
    }
}

}}
`