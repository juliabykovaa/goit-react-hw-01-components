import PropTypes from 'prop-types';
import { FriendProfile, FriendfImg, FriendName, Chip } from './FriendList.styled'
import { BsCircleFill } from "react-icons/bs";

export const Friend = ({ avatar, name, isOnline }) => {
    return (
        <FriendProfile>
            <Chip isOnline={isOnline}>
                <BsCircleFill />
            </Chip>
            <FriendfImg  src={avatar} alt="User avatar" />
            <FriendName>{name}</FriendName>
        </FriendProfile>
    )
};

Friend.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
}